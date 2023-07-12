# Worked Examples {#woRked}



[Screencast Link]()

This section of the Appendix is designed as a streamlined example of working the primary statistic from each lesson. This section is intended to be helpful in two ways:

* The worked example focuses on the operations and interpretations and more closely mimics "how you would work a problem in real life."
* The grading rubric from the end of each lesson serves as the outline for the process. 
* This dataset could be used for the practice problems. For homework that you submit for grading, please choose *different variables* than the ones worked in the examples.

## The Data Set

The dataset used in the "homeworked" examples is from my own research. Along long with the pre-registration and codebooks, it is publicly available on the Open Science Framework (OSF): https://osf.io/z84kh/  I have also provided a copy of it in the GitHub repository that hosts the ReCentering Psych Stats OER.

This data is from an IRB-approved study. The informed consent of the IRB specified that the data could be used in research as well as in teaching demonstrations and would be made available to the general public. You may notice there are student- and teacher- IDs. These numbers are *not** the institution's identification numbers. Rather, they have been further anonymized. 

The purpose of the research project was to evaluate efforts to recenter – in a socially responsive way – courses in the statistics and research methods sequence in scientist-practitioner psychology (PhD) programs. The recentering occurred in two phases:  (a) a transition from SPSS to R and (b) an explicit recentering. Data were from end-of-course evaluations three courses I taught: Research Methods I: Analysis of Variance [ANOVA], Research Methods III: Multivariate Modeling [multivariate], and Research Methods IV: Psychometrics/Theory of Test Construction [psychometrics]) that were offered 2017 through 2022.

Because students could contribute up to three course evaluations, each, multilevel modeling was used for the primary analyses. The nature of the data, though, allows me to demonstrate all of the statistics utilized the OER with this data. For each analysis, I have tried to derive a sensible question that *could be* answered by the data. In-so-doing, I try to point out when the alignment of research question and statistic is less than ideal.

The data file is titled *ReC.rds* and can be retrieved with this code:


```r
dfReC <- readRDS("ReC.rds")
```

The following can serve as a codebook:

|Variable        |Definition or Description                            |Scaling|
|:---------------|:---------------------------------------------------:|:-----------------------:|
|deID            |Anonymized identification for each studnet. Each student could contribute up to three course evaluations |Nominal/factor |
|CourseID        |Unique number for each course taught (i.e., ANOVA has unique numbers across department and year). |Nominal/factor|
|Dept            |CPY (Clinical Psychology), ORG (Industrial Organizational Psychology)|Nominal/factor|
|Course          |ANOVA (analysis of variance),  Multivariate (multivariate modeling), Psychometrics (psychometrics/theory of test construction), taught in that order | Nominal/factor|
|StatsPkg        |SPSS, R | Nominal/factor|
|Centering       |Pre (before explicit recentering), Re (included explicit recentering) | Nominal/factor|
|Year            |Calendar year in which the course was taught |Calendrical time|
|Quarter         |Academic term in which course was taught (fall, winter, spring)| Nominal/factor|
|ProgramYear     |A potential confound to the study. During the changes from SPSS to R and the explicit recentering, the program was also moving the stats sequence from the second to the first year of the doctoral program. First = course taken during first year; Second = course taken during second year; Transition = course taken during the transition period. | Nominal/factor|
|SPFC.Decolonize.Opt.Out|Students were given the opportunity to exclude their data from analysis. Such data was removed prior to any analysis and not included in this set. | Character|

COURSE EVALUATION ITEMS; 5-point Likert scaling from 1(*strongly disagree*) to 5(*strongly agree*). Higher scores are more favorable evaluations.
|Variable        |Complete Item                                                       |
|:---------------|:------------------------------------------------------------------:|
|IncrInterest    |My interest in the subject matter increased over the span of the course.|
|IncrUnderstanding |My understanding of the subject matter increased over the span of the course.|
|ValObjectives   |This course has objectives that are valuable in furthering my education.|
|ApprAssignments |This course has had an appropriate workload, given the course objectives.|
|EffectiveAnswers|The instructor has effectively answered student questions.|
|Respectful      |The instructor has shown respect to students.|
|ClearResponsibilities|The instructor has made student responsibilities clear.|
|Feedback        |The instructor has provided feedback to me about my learning progress.|
|OvInstructor    |My overall rating of this instructor for this course is:|
|MultPerspectives|The instructor has helped students consider issues from multiple perspectives, where applicable.|
|OvCourse        |My overall rating of the course content is:|
|InclsvClssrm    |The instructor has been intentional in fostering an inclusive classroom for students with diverse backgrounds and abilities.|
|DEIintegration  |The instructor has, when appropriate, discussed the relationships between race/ethnicity/culture and course content.|
|ClearPresentation|The instructor has presented course material clearly.|
|ApprWorkload    |This course has had an appropriate workload, given the course objectives.|
|MyContribution  |My overall rating of my contribution in this course is:|
|InspiredInterest|The instructor has inspired student interest in the subject matter of this course.|
|Faith           |The instructor has, when appropriate, discussed the relationship between the Christian faith and course content.|
|EquitableEval   |The instructor used methods of evaluating student course work that were equitable.|
|ClearOrganization|This course has had a clear overall organization.|
|RegPrepare      |I regularly read, reviewed, visited/logged on, or completed assigned readings and tasks.|
|EffectiveLearning|This course has consisted of course activities/tasks that were effective in helping me learn (e.g., discussions, readings, assignments, labs, or other activities).|
|AccessibleInstructor|The instructor has been accessible (e.g., discussion sessions, virtual office hours, phone, chat, email, online forum or conference, etc.).|

From these variables, I created three scales to assess valued by the student (Valued), traditional pedagogy (TradPed), and socially responsive pedagogy (SRped). I will use these in the demonstrations.

**Valued by the student** includes the items: ValObjectives, IncrUnderstanding, IncrInterest

**Traditional pedagogy** includes the items: ClearResponsibilities, EffectiveAnswers, Feedback, ClearOrganization, ClearPresentation

**Socially responsive pedagogy** includes the items: InclusvClassrm, EquitableEval, MultPerspectives, DEIintegration

In the examples where the scale scores are used, I provide code for calculating the means.


## Chapter 2: Ready Set R

[Screencast Link]()

Several elements of the practice problems (i.e., download base R and R studio, open and save an r.rmd file) are not easily demonstrated and not replicated here. These are skipped.

*If you wanted to use this example and dataset as a basis for a homework assignment, you could simply change the seed -- again. For a greater challenge, you could adjust the simulation to have different sample sizes, means, or standard deviations.*

### Install at least three packages we will commonly use:

Below is code for installing three packages. Because continuous reinstallation can be problematic, I have hashtagged them so that they will not re-run.

```r
#install.packages("tidyverse")
#install.packages("ggpubr")
#install.packages("psych")
```
### Copy the simulation in this lesson to your .rmd file. Change the random seed and run the simulation. 


```r
set.seed(2023)
# sample size, M and SD for each group
Accurate <- c(rnorm(30, mean = 1.18, sd = 0.8), rnorm(30, mean = 1.83,
    sd = 0.58), rnorm(30, mean = 1.76, sd = 0.56))
# set upper bound for DV
Accurate[Accurate > 3] <- 3
# set lower bound for DV
Accurate[Accurate < 0] <- 0
# IDs for participants
ID <- factor(seq(1, 90))
# name factors and identify how many in each group; should be in same
# order as first row of script
COND <- c(rep("High", 30), rep("Low", 30), rep("Control", 30))
# groups the 3 variables into a single df: ID, DV, condition
Acc_sim30 <- data.frame(ID, COND, Accurate)
```

### Save the resulting data as a .csv or .rds file in the same file as you saved the .rmd file.

You only need to save it as a .csv or .rds file. I have demonstrated both.

Saving as a .csv file

```r
write.table(Acc_sim30, file = "to_CSV.csv", sep = ",", col.names = TRUE,
    row.names = FALSE)
```

Saving as an .rds file

```r
saveRDS(Acc_sim30, "to_Robject.rds")
```

### Clear your environment (broom in upper right).

You only need to import the .csv or .rds file; I have demonstrated both. 
Open the .csv file from my local drive.

```r
from_CSV <- read.csv("to_CSV.csv", header = TRUE)
```


Open the .rds file from my local drive.

```r
from_rds <- readRDS("to_Robject.rds")
```

### Run the describe() function from the psych package with your simulated data that you imported from your local drive.

YOu only need to retrieve descriptives from the .csv or .rds file; I have demonstrated both. 

```r
psych::describe(from_CSV)
```

```
         vars  n  mean    sd median trimmed   mad min max range  skew kurtosis
ID          1 90 45.50 26.12   45.5   45.50 33.36   1  90    89  0.00    -1.24
COND*       2 90  2.00  0.82    2.0    2.00  1.48   1   3     2  0.00    -1.53
Accurate    3 90  1.65  0.67    1.7    1.67  0.68   0   3     3 -0.29    -0.42
           se
ID       2.75
COND*    0.09
Accurate 0.07
```


```r
psych::describe(from_rds)
```

```
         vars  n  mean    sd median trimmed   mad min max range  skew kurtosis
ID*         1 90 45.50 26.12   45.5   45.50 33.36   1  90    89  0.00    -1.24
COND*       2 90  2.00  0.82    2.0    2.00  1.48   1   3     2  0.00    -1.53
Accurate    3 90  1.65  0.67    1.7    1.67  0.68   0   3     3 -0.29    -0.42
           se
ID*      2.75
COND*    0.09
Accurate 0.07
```

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

<img src="15-woRked_copy10_files/figure-html/unnamed-chunk-14-1.png" width="672" />

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

Here's how to do it with the numbers I learned:

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

Again, there are two ways to calculate it with basic code; and then we can check it with more code from base R.


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

Sum is:


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

```r
#checking my work
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


## Chapter 4: One Sample Test

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

* Is the sample variable on a continuous scale of measurement and formatted as num or int in R?
* Is the external score evaluated on the same continuous scale?


```r
str(JustANOVA$OvInstructor)
```

```
 int [1:114] 5 4 4 3 5 3 5 4 3 5 ...
```
Yes. The format for the OvInstructor variable is integer (which is numerical); the overall course evaluation is on an equivalent (1 to 5) scale.


#### Evaluate statistical assumptions

* Are the skew and kurtosis values within the range expected?
* Does the distribution of the variable differ significantly from a normal distribution?


```r
pastecs::stat.desc(JustANOVA$OvInstructor, norm=TRUE)
```

```
               nbr.val               nbr.null                 nbr.na 
113.000000000000000000   0.000000000000000000   1.000000000000000000 
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
The skew value is -0.984. While it is below the absolute value of 3, the skew.2SE is -2.164. Given that it is larger than the absolute value of 2, we might have some concern about skew.

The kurtosis value is -0.074 and iss below the absolute value of 10. The kurt.2SE value is -0.082 which is less than the absolute value of 2.0. Thus, we are not concerned about kurtosis.

The Shapiro wilk test value is 0.773 (*p* < 0.001). This significant value suggests a distribution that is not normally distributed.


#### Conduct a one sample *t* test (with an effect size)

First, comparison to CPY


```r
rstatix::t_test(JustANOVA, OvInstructor ~ 1, mu = 4.4, detailed = TRUE)
```

```
# A tibble: 1 × 12
  estimate .y.     group1 group2     n statistic      p    df conf.low conf.high
*    <dbl> <chr>   <chr>  <chr>  <int>     <dbl>  <dbl> <dbl>    <dbl>     <dbl>
1     4.19 OvInst… 1      null …   113     -2.25 0.0267   112     4.00      4.37
# ℹ 2 more variables: method <chr>, alternative <chr>
```

```r
rstatix::cohens_d(ReCdf, OvInstructor ~ 1, ref.group = NULL, mu = 4.4)
```

```
# A tibble: 1 × 6
  .y.          group1 group2     effsize     n magnitude 
* <chr>        <chr>  <chr>        <dbl> <int> <ord>     
1 OvInstructor 1      null model -0.0296   309 negligible
```


The course evaluations for ANOVA were 4.186. These were statistically significantly lower than the average course evaluations for CPY $t(112) = -2.25, p = 0.027, CI95(4.00, 4.37), d = -0.030$

#### APA style results with table(s) and figure

* t-test results should include t, df, p, d-or-eta, and CI95%
* Table
* Figure
* Grammar/style

>A one-sample *t*-test was used to evaluate whether the *overall instructor* course evaluation ratings from the ANOVA courses were statistically significant from the departmental averages for the Clinical (CPY; *M* = 4.4) department.  The sample mean for the ANOVA course evaluations was 4.186 (*SD* = 1.013).Although this mean was statistically significantly different from the average CPY course evaluation ratings of the same item, $t(112) = -2.25, p = 0.027, CI95(4.00, 4.37), the effect size was quite small $(d = -0.030)$. A distribution of the ANOVA course ratings is found in Figure 1.


```r
ggpubr::ggboxplot(JustANOVA$OvInstructor, ylab = "Course Evaluation Ratings", xlab = FALSE,
    add = "jitter", title = "Figure 1. Overall Instructor Ratings for ANOVA")
```

```
Warning: Removed 1 rows containing non-finite values (`stat_boxplot()`).
```

```
Warning: Removed 1 rows containing missing values (`geom_point()`).
```

<img src="15-woRked_copy10_files/figure-html/unnamed-chunk-41-1.png" width="672" />

#### Conduct power analyses to determine the power of the current study and a recommended sample size

A quick reminder that the *d* in the power analysis is the difference between the means divided by the pooled standard deviation.

```r
(4.186-4.4)/1.014
```

```
[1] -0.2110454
```

```r
pwr::pwr.t.test(d = (4.186-4.4)/1.014, n = 113, power = NULL, sig.level = 0.05,
    type = "one.sample", alternative = "two.sided")
```

```

     One-sample t test power calculation 

              n = 113
              d = 0.2110454
      sig.level = 0.05
          power = 0.6042062
    alternative = two.sided
```

For the comparison to the CPY departmental average, power was 60%. That is, given the value of the mean difference relative to the pooled standard deviation we had a 60% chance of detecting a statistically significant effect if there was one.


```r
pwr::pwr.t.test(d = (4.186-4.4)/1.014, n = NULL, power = 0.8, sig.level = 0.05,
    type = "one.sample", alternative = "two.sided")
```

```

     One-sample t test power calculation 

              n = 178.1502
              d = 0.2110454
      sig.level = 0.05
          power = 0.8
    alternative = two.sided
```
For the CPY departmental comparison, the recommended sample size would be 178. This means there would need to be 178 individuals to find a statistically significant difference, if one existed.

### Hand Calculations


#### Using traditional NHST (null hypothesis testing language), state your null and alternative hypotheses               
#### Calculate the mean of your sample; identify the mean of your benchmarking sample
#### Using the steps from the previous lesson, calculate the standard deviation of your sample. This should involve variables representing the mean, mean deviation, and mean deviation squared
#### Calculate the one-sample *t*-test
#### Identify the degrees of freedom associated with your *t*-test          
#### Locate the test critical value for your test
#### With the information you have gathered, write the statistical string
#### What is the confidence interval around your sample mean?
#### Calculate the effect size (i.e., Cohen's *d* associated with your *t*-test

## Chapter 5: Independent Samples *t*-test

[Screencast Link]()

The independent-samples t-test is useful when you want to compare means across two different groups. That is, the people in the comparison groups must be different from each other.

*If you wanted to use this example and dataset as a basis for a homework assignment, you could change the course (i.e., Multivariate or Psychometrics) and/or change the dependent variable to one of the other scales or even one of the individual items*.

###  Narrate the research vignette, describing the variables and their role in the analysis

I want to ask the question, "Do the course evaluation ratings for traditional pedagogy differ for CPY and ORG students?"

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

Creating a mean score of completed items from the traditional pedagogy scale.


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

Are the structures of the variables as follows:
* Grouping variable: factor
* Dependent variable: numerical or integer

In our case we want Department to be a factor with two levels and the SCRPed variable to be integer or numerical.


```r
str(IndT_df)
```

```
Classes 'data.table' and 'data.frame':	114 obs. of  2 variables:
 $ Dept   : chr  "CPY" "CPY" "CPY" "CPY" ...
 $ TradPed: num  4.4 3.8 4 3 4.8 3.5 4.6 3.8 3.6 4.6 ...
```

Since the Department is a character variable, we need to change it to be a factor.

```r
IndT_df$Dept <- factor(IndT_df$Dept)
str(IndT_df$Dept)
```

```
 Factor w/ 2 levels "CPY","ORG": 1 1 1 1 1 1 1 1 1 1 ...
```

Without further coding, R will order the factors alphabetically.  This is fine.  CPY will be the base/intercept and I-O will be the comparison (this becomes more important in regression).

#### Evaluate statistical assumptions

* Evaluate and report skew and kurtosis
* Evaluate and correctly interpret homogeneity of variance (if Levene's < .05; use Welch's formulation)























