
# One Sample Test (Ch 4)


[Screencast Link]()

The one-sample test comes in handy when you want to compare your dataset to an external benchmark or standard. It can be a real helper in program evaluation

*If you wanted to use this example and dataset as a basis for a homework assignment, you could select a different course (i.e., Multivariate or Psychometrics) and/or compare the mean for the ORG department ($M = 4.1$).*

### Working the Problem with R and R Packages

#### Narrate the research vignette, describing the variables and their role in the analysis

From my course evaluation data, I want to ask the question, "Are ratings for the Overall Instructor for the ANOVA course evals statistically significantly different from the overall departmental averages for that same item?"  In CPY the overall average for that specific item is 4.4. 

#### Simulate (or import) and format data

The BIGdf is from a project that evaluated three changes to our own stats courses, over time. As a whole, this dataset violates a ton of assumptions of ANOVA, but we can create a tiny df and use it for demonstrations.


```r
ReCdf <- readRDS("ReC.rds")
```

Let's first trim it to just students who took ANOVA


```r
JustANOVA <- subset(ReCdf, Course == "ANOVA") 
```

And further trim to our variable of interest


```r
library(tidyverse)
```

```
── Attaching core tidyverse packages ──────────────────────── tidyverse 2.0.0 ──
✔ dplyr     1.1.2     ✔ readr     2.1.4
✔ forcats   1.0.0     ✔ stringr   1.5.0
✔ ggplot2   3.4.2     ✔ tibble    3.2.1
✔ lubridate 1.9.2     ✔ tidyr     1.3.0
✔ purrr     1.0.1     
── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
✖ dplyr::filter() masks stats::filter()
✖ dplyr::lag()    masks stats::lag()
ℹ Use the conflicted package (<http://conflicted.r-lib.org/>) to force all conflicts to become errors
```

```r
tiny1 <- JustANOVA %>%
    dplyr::select (OvInstructor)
```

And further trim to non-missing data


```r
tiny1 <- na.omit(tiny1)
```


* Is the sample variable on a continuous scale of measurement and formatted as num or int in R?
* Is the external score evaluated on the same continuous scale?


```r
str(tiny1$OvInstructor)
```

```
 int [1:113] 5 4 4 3 5 3 5 4 3 5 ...
```
Yes. The format for the OvInstructor variable is integer (which is numerical); the overall course evaluation is on an equivalent (1 to 5) scale.


#### Evaluate statistical assumptions

* Are the skew and kurtosis values within the range expected?
* Does the distribution of the variable differ significantly from a normal distribution?


```r
pastecs::stat.desc(tiny1$OvInstructor, norm=TRUE)
```

```
               nbr.val               nbr.null                 nbr.na 
113.000000000000000000   0.000000000000000000   0.000000000000000000 
                   min                    max                  range 
  1.000000000000000000   5.000000000000000000   4.000000000000000000 
                   sum                 median                   mean 
473.000000000000000000   5.000000000000000000   4.185840707964601393 
               SE.mean           CI.mean.0.95                    var 
  0.095363991425895162   0.188951524765374329   1.027654867256637239 
               std.dev               coef.var               skewness 
  1.013733134141642456   0.242181488706142922  -0.984495621273390964 
              skew.2SE               kurtosis               kurt.2SE 
 -2.164227168444894378  -0.074100280830601939  -0.082121112321619227 
            normtest.W             normtest.p 
  0.772806906937811733   0.000000000006195409 
```
The skew value is -1.215. While it is below the absolute value of 3, the skew.2SE is -2.289. Given that it is larger than the absolute value of 2, we might have some concern about skew.

The kurtosis value is  0.512 and is below the absolute value of 10. The kurt.2SE value is 0.487 which is less than the absolute value of 2.0. Thus, we are not concerned about kurtosis.

The Shapiro wilk test value is 0.773 (*p* < 0.001). This significant value suggests a distribution that is not normally distributed.


#### Conduct a one sample *t* test (with an effect size)

First, comparison to CPY


```r
rstatix::t_test(tiny1, OvInstructor ~ 1, mu = 4.4, detailed = TRUE)
```

```
# A tibble: 1 × 12
  estimate .y.     group1 group2     n statistic      p    df conf.low conf.high
*    <dbl> <chr>   <chr>  <chr>  <int>     <dbl>  <dbl> <dbl>    <dbl>     <dbl>
1     4.19 OvInst… 1      null …   113     -2.25 0.0267   112     4.00      4.37
# ℹ 2 more variables: method <chr>, alternative <chr>
```

```r
rstatix::cohens_d(tiny1, OvInstructor ~ 1, ref.group = NULL, mu = 4.4)
```

```
# A tibble: 1 × 6
  .y.          group1 group2     effsize     n magnitude
* <chr>        <chr>  <chr>        <dbl> <int> <ord>    
1 OvInstructor 1      null model  -0.211   113 small    
```


The course evaluations for ANOVA were 4.256. These were not statistically significantly lower than the average course evaluations for CPY $t(81) = -1.283, p = 0.203, CI95(4.03, 4.48), d = -0.142$

#### APA style results with table(s) and figure

* t-test results should include t, df, p, d-or-eta, and CI95%
* Table
* Figure
* Grammar/style

>A one-sample *t*-test was used to evaluate whether the *overall instructor* course evaluation ratings from the ANOVA courses were statistically significant from the departmental averages for the Clinical (CPY; *M* = 4.4) department.  The sample mean for the ANOVA course evaluations was 4.186 (*SD* = 1.013).Although this mean was statistically significantly different from the average CPY course evaluation ratings of the same item, $t(81) = -1.283, p = 0.203, CI95(4.03, 4.48)$,  the effect size was quite small $(d = -0.142)$. A distribution of the ANOVA course ratings is found in Figure 1.


```r
ggpubr::ggboxplot(tiny1$OvInstructor, ylab = "Course Evaluation Ratings", xlab = FALSE,
    add = "jitter", title = "Figure 1. Overall Instructor Ratings for ANOVA")
```

![](15-3-woRked_tOneSample_files/figure-docx/unnamed-chunk-10-1.png)<!-- -->

#### Conduct power analyses to determine the power of the current study and a recommended sample size

A quick reminder that the *d* in the power analysis is the difference between the means divided by the pooled standard deviation. This is the same as Cohen's d that we just calculated.


```r
pwr::pwr.t.test(d = -0.1416285	, n = 82, power = NULL, sig.level = 0.05,
    type = "one.sample", alternative = "two.sided")
```

```

     One-sample t test power calculation 

              n = 82
              d = 0.1416285
      sig.level = 0.05
          power = 0.2448914
    alternative = two.sided
```

For the comparison to the CPY departmental average, power was 24%. That is, given the value of the mean difference relative to the pooled standard deviation we had a 24% chance of detecting a statistically significant effect if there was one.


```r
pwr::pwr.t.test(d = -0.14162859, n = NULL, power = 0.8, sig.level = 0.05,
    type = "one.sample", alternative = "two.sided")
```

```

     One-sample t test power calculation 

              n = 393.2205
              d = 0.1416286
      sig.level = 0.05
          power = 0.8
    alternative = two.sided
```
For the CPY departmental comparison, the recommended sample size would be 393. This means there would need to be 393 individuals to find a statistically significant difference, if one existed.

### Hand Calculations

#### Using traditional NHST (null hypothesis testing language), state your null and alternative hypotheses 

$$
\begin{array}{ll}
H_0: & \mu = 4.4 \\
H_A: & \mu \neq 4.4
\end{array}
$$

#### Calculate the mean of your sample; identify the mean of your benchmarking sample

I will continue with the *tiny1* dataset.


```r
mean(tiny1$OvInstructor, na.rm=TRUE)
```

```
[1] 4.185841
```
#### Using the steps from the previous lesson, hand-calculate the standard deviation of your sample. This should involve variables representing the mean, mean deviation, and mean deviation squared


```r
#first the mean
tiny1$M_OvInst <- mean(tiny1$OvInstructor, na.rm=TRUE)
#second the mean deviation
tiny1$Mdev_OvInst <- (tiny1$OvInstructor-tiny1$M_OvInst)
#third the mean deviation squared
tiny1$mdev2_OvInst <- (tiny1$Mdev_OvInst  * tiny1$Mdev_OvInst)
#fourth the variance
var_OvInst <- sum(tiny1$mdev2_OvInst /((nrow(tiny1) - 1)))
var_OvInst
```

```
[1] 1.027655
```

```r
#finally the standard deviation
sd_OvInst <- sqrt(var_OvInst)
sd_OvInst
```

```
[1] 1.013733
```
The variance is 1.032; the standard deviation is 1.016.


```r
sd(tiny1$OvInstructor)#checking my work
```

```
[1] 1.013733
```
#### Calculate the one-sample *t*-test

Here's the formula:  

$$
t = \frac{\bar{X} - \mu}{\hat{\sigma}/\sqrt{N} }
$$


```r
(4.256098 - 4.4)/(1.016056/sqrt(82))
```

```
[1] -1.282496
```
#### Identify the degrees of freedom associated with your *t*-test     

For the one-sample *t*-test, $df = N - 1$. In our case


```r
82 - 1
```

```
[1] 81
```

#### Locate the test critical value for your test
We can use a table of critical values for the one sample *t*-test:  https://www.statology.org/t-distribution-table/

A 2-tail test, when p - .05, with ~120 individuals is 1.98

Or, this code:


```r
qt(p = 0.05/2, df = 81, lower.tail = FALSE)
```

```
[1] 1.989686
```
### Is the *t*-test statistically significant? Why or why not?

No. *t* = -1.282496 does not exceed the (absolute) test critical value of 1.98.

#### What is the confidence interval around your sample mean?

Here is a reminder of the formula:

$$\bar{X} \pm t_{cv}(\frac{s}{\sqrt{n}})$$


```r
(4.256098) - ((1.989686) * (1.016056/sqrt(81)))
```

```
[1] 4.031472
```

```r
(4.256098) + ((1.989686) * (1.016056/sqrt(81)))
```

```
[1] 4.480724
```

We are 95% confident that the sample mean for the student in the ANOVA classes is between 4.03 and 4.48.

#### Calculate the effect size (i.e., Cohen's *d* associated with your *t*-test

A reminder of the two formula:

$$d = \frac{Mean Difference}{SD}=\frac{t}{\sqrt{N}}$$

```r
# First formula
(4.256098 - 4.4)/1.016056
```

```
[1] -0.141628
```

```r
# Second formula
-1.282496/sqrt(82)
```

```
[1] -0.141628
```
