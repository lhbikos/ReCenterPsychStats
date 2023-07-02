# 


[Screencast Link]()


## Chapter 3: Preliminary Analyses 

[Screencast Link]()

Preliminary analyses often consist of means, standard deviations, and correlations. These can be helpful in determining whether or not data are normally distribution. Correlations and pairs.panels also assess the relatedness of the variables.

*If you wanted to use this example and dataset as a basis for a homework assignment, you could (a) select a different course (i.e., Multivariate or Psychometrics) and/or (b) different variables.*

### Working the Problem with R and R Packages

#### Create a df with 3 continuously scaled variables of interest

The ReC.rds is the entire dataset. Let's first open it. 


```r
ReCdf <- readRDS("ReC.rds")
```

Recall that students (represented by the *deID* variable) could contribute up to three course evaluations (i.e., ANOVA, psychometrics, multivariate) each. In many statistics, repeated observations creates dependencies that need to be accounted for statistically.

To avoid this dependency and to practice an R skil, let's first filter the data, selecting only those students who took ANOVA.


```r
JustANOVA <- subset(ReCdf, Course == "ANOVA") 
```

#### Create a df with 3 continuously scaled variables of interest

The assignment requires that we downsize to three variables. We could pick any three. 


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
tiny3 <- JustANOVA %>%
    dplyr::select (OvInstructor, OvCourse, MyContribution)
```

#### Produce descriptive statistics


```r
psych::describe(tiny3)
```

```
               vars   n mean   sd median trimmed  mad min max range  skew
OvInstructor      1 113 4.19 1.01      5    4.34 0.00   1   5     4 -0.98
OvCourse          2 113 3.93 1.12      4    4.07 1.48   1   5     4 -0.72
MyContribution    3 113 3.96 0.83      4    4.01 1.48   2   5     3 -0.39
               kurtosis   se
OvInstructor      -0.07 0.10
OvCourse          -0.49 0.11
MyContribution    -0.55 0.08
```

#### Produce SPLOM/pairs.panels


```r
psych::pairs.panels(tiny3)
```

![](15-2-woRked_Preliminaries_files/figure-docx/unnamed-chunk-6-1.png)<!-- -->

#### Produce an apaTables matrix


```r
apaTables::apa.cor.table(tiny3)
```

```


Means, standard deviations, and correlations with confidence intervals
 

  Variable          M    SD   1          2         
  1. OvInstructor   4.19 1.01                      
                                                   
  2. OvCourse       3.93 1.12 .83**                
                              [.76, .88]           
                                                   
  3. MyContribution 3.96 0.83 .49**      .60**     
                              [.34, .62] [.46, .70]
                                                   

Note. M and SD are used to represent mean and standard deviation, respectively.
Values in square brackets indicate the 95% confidence interval.
The confidence interval is a plausible range of population correlations 
that could have caused the sample correlation (Cumming, 2014).
 * indicates p < .05. ** indicates p < .01.
 
```
#### Produce an APA Style write-up of the preliminary analyses

Our sample included 113 doctoral students in Clinical and Industrial-Organizational psychology doctoral (PhD) programs who were completing a statistics class focused on analysis of variance.  Visual inspection of three dimensions of course evaluation (overall instructor, overall course, my contributions) combined with formal evaluation of skewness and kurtosis suggested that their distributions did not violate the assumption of univariate normality. That is, skew values all fell below the absolute value of 3 and kurtosis values all fell below the absolute value of 10 [@kline_data_2016]. Means, standard deviations, and a correlation matrix are presented in Table 1. All three correlations were strong and statistically significant. We noted that the correlation between the overall instructor and overall course was especially high (*r* = .83, *p* < .001)

### Hand Calculations

Although these are termed “hand calculations,” you may use the code demonstrated in the chapter to work these problems. 

I am going to continue with the *tiny3* dataset I used when I worked the problem with R and R packages. Given that this is for homework, let's avoid problems with missingness by deleting any rows with missing data:

If you need to reimport data, here is a quick recap of the code explained earlier.


```r
ReCdf <- readRDS("ReC.rds")
JustANOVA <- subset(ReCdf, Course == "ANOVA") 

library(tidyverse)
tiny3 <- JustANOVA %>%
    dplyr::select (OvInstructor, OvCourse, MyContribution)
```

To avoid problems in the code we are used that is caused by missingness, we will eliminate any rows with missing data.


```r
tiny3 <- na.omit(tiny3)
```


#### Create a variable that represents the mean.
I will start with the OvInstructor variable.


```r
tiny3$M_OvI <- mean(tiny3$OvInstructor, na.rm=TRUE)
```

#### Create a variable that represents the mean deviation.


```r
tiny3$Mdev_OvI <- (tiny3$OvInstructor-tiny3$M_OvI)
```

#### What is the value of the sum of mean deviations?


```r
round(sum(tiny3$Mdev_OvI, na.rm = TRUE), 3)
```

```
[1] 0
```

#### Create a variable that represents the absolute mean deviation.


```r
tiny3$abslt_mOvI <- abs(tiny3$Mdev_OvI)
```


**What is the value of the sum of the absolute mean deviation?**

```r
round(sum(tiny3$abslt_mOvI, na.rm = TRUE), 3)
```

```
[1] 96.071
```

**What is the value of the mean of the absolute mean deviation?**

```r
round(mean(tiny3$abslt_mOvI, na.rm = TRUE), 3)
```

```
[1] 0.85
```

**What does this value tell you?**
Average distance of each value from the mean.

#### Create a variable that represents the mean deviation squared.


```r
tiny3$mdev2_OvI <- (tiny3$Mdev_OvI * tiny3$Mdev_OvI)
```

**What is the value of the sum of squared deviations around the mean (also known as sums of squares; sometimes abbreviated as $SS$)?**


```r
sum(tiny3$mdev2_OvI, na.rm = TRUE)
```

```
[1] 115.0973
```

**What is the value of the variance ($s^2$)?**

There are at least two ways to do this with basic code (and then we can check our work).

Here's how to do it with "more code."

```r
var_OvI <- sum(tiny3$mdev2_OvI/((nrow(tiny3) - 1)))
var_OvI
```

```
[1] 1.027655
```

Here's how to do it with the numbers that I calculated:

```r
115.0973/(113-1)
```

```
[1] 1.027654
```
Checking my work with the *var* function from base R. If it's wrong, I need to rework some of the previous steps.

```r
var(tiny3$OvInstructor, na.rm = TRUE) #checking my work
```

```
[1] 1.027655
```

**What is the value of the standard deviation ($s$)?**

There are two ways to calculate it with basic code; and then we can check it with more code from base R.


```r
sd_OvI <- sqrt(var_OvI)#calculating with the object I created
sd_OvI
```

```
[1] 1.013733
```

```r
sqrt (1.027655)#calculated with the actual numbers
```

```
[1] 1.013733
```

```r
sd(tiny3$OvInstructor)#checking my work with the code from baseR
```

```
[1] 1.013733
```

#### Using the same general approach, calculate the mean deviation and standard deviation for a second, continuously scaled variable.

My second variable is MyContribution

```r
#first the mean
tiny3$M_MyC <- mean(tiny3$MyContribution, na.rm=TRUE)
#second the mean deviation
tiny3$Mdev_MyC <- (tiny3$MyContribution-tiny3$M_MyC)

#fourth the variance
var_MyC <- sum(tiny3$mdev2_MyC/((nrow(tiny3) - 1)))
var_MyC
```

```
[1] 0
```

```r
#finally the standard deviation
sd_MyC <- sqrt(var_MyC)
sd_MyC#checking my work
```

```
[1] 0
```

```r
sd(tiny3$MyContribution)#checking my work
```

```
[1] 0.8337652
```

#### Create a variable that represents the *cross-product* (of the mean deviations). What is the sum of these cross-products?


```r
tiny3$crossproduct <- (tiny3$Mdev_OvI * tiny3$Mdev_MyC)
```

The sum of the crossproduct is:


```r
xp_sum <- sum(tiny3$crossproduct)
xp_sum
```

```
[1] 46.74336
```


#### Calculate the value of their covariance.


```r
cov <- (1/(113-1)) * 46.74336
cov
```

```
[1] 0.4173514
```

#### Calculate value of correlation coefficient.


```r
0.4173514/(1.013733*0.8338)
```

```
[1] 0.4937606
```
And now I can check my work with a function from base R.

```r
cor.test(tiny3$OvInstructor, tiny3$MyContribution)
```

```

	Pearson's product-moment correlation

data:  tiny3$OvInstructor and tiny3$MyContribution
t = 5.9825, df = 111, p-value = 0.00000002737
alternative hypothesis: true correlation is not equal to 0
95 percent confidence interval:
 0.3400714 0.6217934
sample estimates:
      cor 
0.4937812 
```

