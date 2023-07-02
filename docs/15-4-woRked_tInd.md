# HW Independent t-test



[Screencast Link]()

## Chapter 5: Independent Samples *t*-test

[Screencast Link]()

The independent-samples t-test is useful when you want to compare means across two different groups. That is, the people in the comparison groups must be different from each other.

*If you wanted to use this example and dataset as a basis for a homework assignment, you could change the course (i.e., Multivariate or Psychometrics) and/or change the dependent variable to one of the other scales*.

###  Narrate the research vignette, describing the variables and their role in the analysis

I want to ask the question, "Do the course evaluation ratings for the traditional pedagogy subscale differ for CPY and ORG students?"

I will use the mean rating for the traditional pedagogy rating. As a mean, it retains its continuous, Likert scaling, ranging from 1 to 5 (with higher scores being more positive). 

My predictor variable will be department. It has two levels: CPY and ORG.

### Working the Problem with R and R Packages

#### Simulate (or import) and format data

First, bring in the dataset.


```r
big <- readRDS("ReC.rds")
```

To avoid "dependency" in the data, I will just use data from the ANOVA course.  Let's first trim it to just students who took ANOVA


```r
JustANOVA <- subset(big, Course == "ANOVA") 
```

I will create a mean score of completed items from the traditional pedagogy scale.


```r
#Creates a list of the variables that belong to that scale
TradPed_vars <- c('ClearResponsibilities', 'EffectiveAnswers','Feedback', 'ClearOrganization','ClearPresentation')

#Calculates a mean if at least 75% of the items are non-missing; adjusts the calculating when there is missingness
JustANOVA$TradPed <- sjstats::mean_n(JustANOVA[, TradPed_vars], .75)
```

To make it easier for teaching, I will make a super tiny df with just the predictor and continuous variable.


```r
IndT_df <-(dplyr::select (JustANOVA, Dept, TradPed))
```

And further trim to non-missing data


```r
IndT_df <- na.omit(IndT_df)
```

Are the structures of the variables as follows:
* Grouping variable: factor
* Dependent variable: numerical or integer

In our case we want Department to be a factor with two levels and the SCRPed variable to be integer or numerical.


```r
str(IndT_df)
```

```
Classes 'data.table' and 'data.frame':	112 obs. of  2 variables:
 $ Dept   : chr  "CPY" "CPY" "CPY" "CPY" ...
 $ TradPed: num  4.4 3.8 4 3 4.8 3.5 4.6 3.8 3.6 4.6 ...
 - attr(*, "na.action")= 'omit' Named int [1:2] 74 84
  ..- attr(*, "names")= chr [1:2] "202" "234"
```

Since the Department is a character variable, we need to change it to be a factor.

```r
IndT_df$Dept <- factor(IndT_df$Dept)
str(IndT_df$Dept)
```

```
 Factor w/ 2 levels "CPY","ORG": 1 1 1 1 1 1 1 1 1 1 ...
```

Without further coding, R will order the factors alphabetically.  This is fine.  CPY will be the base/intercept and ORG will be the comparison (this becomes more important in regression).

#### Evaluate statistical assumptions

* Evaluate and report skew and kurtosis
* Evaluate and correctly interpret homogeneity of variance (if Levene's < .05; use Welch's formulation)


```r
psych::describeBy(IndT_df ~ Dept, type =1, mat=TRUE)
```

```
         item group1 vars  n     mean        sd median  trimmed     mad min max
Dept*1      1    CPY    1 81 1.000000 0.0000000    1.0 1.000000 0.00000 1.0   1
Dept*2      2    ORG    1 31 2.000000 0.0000000    2.0 2.000000 0.00000 2.0   2
TradPed1    3    CPY    2 81 4.129630 0.7547259    4.2 4.210769 0.88956 1.8   5
TradPed2    4    ORG    2 31 3.870968 1.0948953    4.0 4.040000 1.18608 1.0   5
         range       skew  kurtosis         se
Dept*1     0.0        NaN       NaN 0.00000000
Dept*2     0.0        NaN       NaN 0.00000000
TradPed1   3.2 -0.7630015 0.1555318 0.08385843
TradPed2   4.0 -1.1832786 0.5826528 0.19664900
```
Although I included Dept in the descriptives, it is a factor and therefore the values around distribution are rather senseless.

TradPed, though, is a continuously scored variable:

Skew = -0.763 (CPY) and -1.183 (ORG)  falls below the |3.0| threshold of concern (Klein, 2016)
Kurtosis = 0.156 (CPY) and 0.583 (ORG) falls below the |10.0| threshold of concern (Klein, 2016)

We can use the Shapiro Wilk test for a formal test of normality


```r
library(tidyverse)#opening this package so I can use the pipes
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
shapiro <- IndT_df%>%
    group_by(Dept) %>%
    rstatix::shapiro_test(TradPed)
shapiro
```

```
# A tibble: 2 × 4
  Dept  variable statistic         p
  <fct> <chr>        <dbl>     <dbl>
1 CPY   TradPed      0.918 0.0000731
2 ORG   TradPed      0.851 0.000544 
```

The Shapiro-Wilk test of normality indicated that the dependent variable, traditional pedagogy, differed significantly from a normal distribution for both CPY students $(W = 0.918, p < 0.001)$ and ORG students$(W = 0.851, p < 0.001)$. 

Should we be concerned? A general rule of thumb is that when cell sizes are larger than 15 the independent *t*-test should be relatively robust to violations of normality [@green_using_2017]. Although there are more CPY than ORG students, we are well-powered.

For fun (not required), let's produce a pairs.panels.


```r
psych::pairs.panels(IndT_df)
```

![](15-4-woRked_tInd_files/figure-docx/unnamed-chunk-11-1.png)<!-- -->

We can see that we'll have more CPY students than ORG students. Although our kurtosis was below |10| our distribution looks negatively skewed, with the majority of the scores being on the high end of the scale.

And now for homogeneity of variance:


```r
rstatix::levene_test(IndT_df, TradPed ~ Dept, center = median)
```

```
# A tibble: 1 × 4
    df1   df2 statistic     p
  <int> <int>     <dbl> <dbl>
1     1   110      2.46 0.120
```

Levene's test for homogeneity of variance indicated that we did not violate the assumption of homogeneity of variance $(F[1, 110] = 2.460, p = 0.120)$. That is to say, the variance in each of the departments is not statistically significantly different from each other. We can use the regular (Student's) formulation of the *t*-test for independent samples.


#### Conduct an independent samples *t*-test (with an effect size and 95%CIs)

Conduct the independent samples *t*-test (with an effect size)


```r
indT.test <- rstatix::t_test(IndT_df, TradPed ~ Dept, var.equal = TRUE,
    detailed = TRUE) %>%
    rstatix::add_significance()
indT.test
```

```
# A tibble: 1 × 16
  estimate estimate1 estimate2 .y.     group1 group2    n1    n2 statistic     p
     <dbl>     <dbl>     <dbl> <chr>   <chr>  <chr>  <int> <int>     <dbl> <dbl>
1    0.259      4.13      3.87 TradPed CPY    ORG       81    31      1.42 0.158
# ℹ 6 more variables: df <dbl>, conf.low <dbl>, conf.high <dbl>, method <chr>,
#   alternative <chr>, p.signif <chr>
```

Calculating the Cohen's *d* as the effect size.

```r
rstatix::cohens_d(IndT_df, TradPed ~ Dept, var.equal = TRUE)
```

```
# A tibble: 1 × 7
  .y.     group1 group2 effsize    n1    n2 magnitude
* <chr>   <chr>  <chr>    <dbl> <int> <int> <ord>    
1 TradPed CPY    ORG      0.300    81    31 small    
```

The independent samples t-test was nonsignificant, $t(110) = 1.423, p = 0.158$, the effect size (d = 0.300) was small. The 95% confidence interval for the difference in means ranged from -0.102 to  0.619. 


#### APA style results with table(s) and figure

* Complete content of results (including t, df, p, d-or-eta, CI95%)
* Table
* Figure
* Grammar/formatting

>An independent samples *t*-test was conducted to evaluate the hypothesis that there would be differences in course evaluation ratings of traditional pedagogy between academic departments (CPY, ORG). 

>We began by analyzing the data to see if it met the statistical assumptions for analysis with an independent samples *t*-test. One assumption is that the dependent variable be normally distributed within the both levels of the grouping variable. We evaluated skew and kurtosis using Kline's [-@kline_data_2016] guidelines  of the absolute values of 3 (skew) and 10 (kurtosis). Our results were well-within these boundary conditions. Specifically, the traditional pedagogy ratings for CPY were -0.763 and 0.156 for skew and kurtosis, respectively; they were -1.183 and 0.583 for ORG. The Shapiro-Wilk test of normality indicated that the dependent variable, traditional pedagogy, differed significantly from a normal distribution for both CPY students $(W = 0.918, p < 0.001)$ and ORG students$(W = 0.851, p < 0.001)$. Levene's test for homogeneity of variance indicated that we did not violate the assumption of homogeneity of variance $(F[1, 110] = 2.460, p = 0.120)$. That is to say, the variance in each of the departments is not statistically significantly different from each other. Because the independent samples *t*-test is relatively robust to violations of normality when samples sizes have at least 15 participants per cell [@green_using_2017] and there was no violation of the homogeneity of variance assumption we proceded with the Student's formulation of the *t*-test for independent samples. 

>The independent samples *t*-test was nonsignificant, $t(110) = 1.423, p = 0.158$, the effect size (d = 0.300) was small. The 95% confidence interval for the difference in means ranged from -0.102 to  0.619.  Means and standard deviations are presented in Table 1; the results are illustrated in Figure 1.



```r
apaTables::apa.1way.table(Dept, TradPed, IndT_df)
```

```


Descriptive statistics for TradPed as a function of Dept.  

 Dept    M   SD
  CPY 4.13 0.75
  ORG 3.87 1.09

Note. M and SD represent mean and standard deviation, respectively.
 
```



```r
indT.box <- ggpubr::ggboxplot(IndT_df, x = "Dept", y = "TradPed", color = "Dept",
    palette = c("#00AFBB", "#FC4E07"), add = "jitter", title = "Figure 1. Traditional Pedagogy as a Function of Academic Department")
ind.testT <- indT.test %>%
    rstatix::add_xy_position(x = "Dept")  #autocomputes p-value labels positions
indT.box <- indT.box + ggpubr::stat_pvalue_manual(ind.testT, label = "p.signif",
    tip.length = 0.02, hide.ns = FALSE, y.position = c(6)) + labs(subtitle = rstatix::get_test_label(indT.test,
    detailed = TRUE))  #adds t-test results

indT.box
```

![](15-4-woRked_tInd_files/figure-docx/unnamed-chunk-16-1.png)<!-- -->

#### Conduct power analyses to determine the power of the current study and a recommended sample size 


We can use Cohen's d in this specification of *d*.


```r
pwr::pwr.t.test(d = 0.30, n = 112, power = NULL, sig.level = 0.05,
    type = "two.sample", alternative = "two.sided")
```

```

     Two-sample t test power calculation 

              n = 112
              d = 0.3
      sig.level = 0.05
          power = 0.6084749
    alternative = two.sided

NOTE: n is number in *each* group
```

We were at 61% power. That is, given the value of the mean difference (), we had a 61% chance of detecting a statistically significant effect if there was one. How big of a sample would it take?


```r
pwr::pwr.t.test(d = 0.3, n = NULL, power = 0.8, sig.level = 0.05,
    type = "two.sample", alternative = "two.sided")
```

```

     Two-sample t test power calculation 

              n = 175.3847
              d = 0.3
      sig.level = 0.05
          power = 0.8
    alternative = two.sided

NOTE: n is number in *each* group
```

To find a statistically significant difference, we would need 175 per group. This large size is consistent with the small effect -- that there isn't really a difference between the two groups..

### Hand Calculations

*Note: While the values of the hand-calculations are close to those calculated with the R packages, they differ slightly.*

#### Using traditional NHST (null hypothesis testing language), state your null and alternative hypotheses

$$H_0: \mu_1 = \mu_2$$
$$H_A: \mu_1 \neq \mu_2$$

#### Using an R package or functions in base R, calculate the means and standard deviations for both levels of the dependent variable


```r
psych::describeBy(IndT_df ~ Dept, type =1, mat=TRUE)
```

```
         item group1 vars  n     mean        sd median  trimmed     mad min max
Dept*1      1    CPY    1 81 1.000000 0.0000000    1.0 1.000000 0.00000 1.0   1
Dept*2      2    ORG    1 31 2.000000 0.0000000    2.0 2.000000 0.00000 2.0   2
TradPed1    3    CPY    2 81 4.129630 0.7547259    4.2 4.210769 0.88956 1.8   5
TradPed2    4    ORG    2 31 3.870968 1.0948953    4.0 4.040000 1.18608 1.0   5
         range       skew  kurtosis         se
Dept*1     0.0        NaN       NaN 0.00000000
Dept*2     0.0        NaN       NaN 0.00000000
TradPed1   3.2 -0.7630015 0.1555318 0.08385843
TradPed2   4.0 -1.1832786 0.5826528 0.19664900
```

CPY: *M* = 4.130, *SD* = 0.755
ORG: *M* = 3.871, *SD* = 1.095

#### Calulate the SE used in the denominator of the *t*-test

Just as a reminder, the SE is the denominator in the *t*-test formula:  

$$t = \frac{\bar{X_{1}} -\bar{X_{2}}}{\sqrt{\frac{s_{1}^{2}}{N_{1}}+\frac{s_{2}^{2}}{N_{2}}}}$$

```r
sqrt((0.7547259^2/81) + (1.0948953^2/31))
```

```
[1] 0.2137828
```
The *SE* = 0.214

#### Calculate the independent samples *t*-test


```r
(4.12963 - 3.870968)/0.2137828
```

```
[1] 1.209929
```

#### Identify the degrees of freedom associated with your *t*-test

$N - 2$ is the degrees of freedom:  112-2, df = 110

#### Locate the test critical value for your test

We can look at a [table of critical values](https://www.statology.org/t-distribution-table/)

For a two-tailed test, with alpha of 0.05, and a sample size of 120 (close enough), the *t*-statistic must be greater than 1.98.

We could also obtain a *t* critical value with this code:


```r
qt(0.05/2, 112, lower.tail = TRUE)
```

```
[1] -1.981372
```

```r
qt(0.05/2, 112, lower.tail = FALSE)
```

```
[1] 1.981372
```
#### Is the *t*-test statistically significant? Why or why not?

In a two-tailed test, if the *t*-statistic falls outside the boundaries of -1.98 and 1.98 the means of the two groups are statistically significantly different from each other. 


#### Calculate the confidence interval around the difference in sample means

Calculating a confidence interval around the difference in sample means requires the two-tailed test critical values.  We can insert them into this formula:

$$(\bar{X_{1}} -\bar{X_{2})} \pm  t_{cv}(SE)$$


```r
(4.129630 - 3.870968) - (1.981372 * 0.2137828)
```

```
[1] -0.1649213
```

```r
(4.129630 - 3.870968) + (1.981372 * 0.2137828)
```

```
[1] 0.6822453
```
We are 95% confident that the mean difference falls between -0.165 and 0.682. Because this interval passes through zero, we cannot be certain that the difference is 0. This is consistent with the non-significant *p* value.

#### Calculate the effect size (i.e., Cohen’s d associated with your *t*-test

Here is the formula for Cohen's *d*:

$$d = t\sqrt{\frac{N_{1}+N_{2}}{N_{1}N_{2}}}$$


```r
1.209929 * (sqrt((81 + 31)/(81 * 31)))
```

```
[1] 0.2555321
```

