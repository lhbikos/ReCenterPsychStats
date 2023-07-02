# One-Way Repeated Measures with a Multivariate Approach {#RMmultiv}



As noted in the lesson on [one-way repeated measures ANOVA](#Repeated), the researcher can use a univariate or multivariate approach to analyzing the data. The *rstatix::anova_test()* is limited to the univariate approach. In order to maintain a streamlined chapter with minimal distractions to student learning I have chosen to provide a quick and separate demonstration of the multivariate approach in this appendix.  In-so-doing, I will use the *car* package.

As a quick reminder, I will describe and resimulate the data. The narration will presume familiarity with the [one-way repeated measures ANOVA](#Repeated) lesson.

## Research Vignette {-}

Amodeo [@amodeo_empowering_2018] and colleagues conducted a mixed methods study (qualitative and quantitative) to evaluate the effectiveness of an empowerment, peer-group-based, intervention with participants (*N* = 8) who experienced transphobic episodes. Focus groups used qualitative methods to summarize emergent themes from the program (identity affirmation, self-acceptance, group as support) and a one-way, repeated measures ANOVA provided evidence of increased resilience from pre to three-month followup.

Eight participants (seven transgender women and one genderqueer person) participated in the intervention. The mean age was 28.5 (*SD* = 5.85). All participants were located in Italy.

The within-subjects condition was wave, represented by T1, T2, and T3:

* T1, beginning of training
* Training, three 8-hour days, 
  - content included identity and heterosexism, sociopolitical issues and minority stress, resilience, and empowerment
* T2, at the conclusion of the 3-day training
* Follow-up session 3 months later
* T3, at the conclusion of the +3 month follow-up session

The dependent variable (assessed at each wave) was a 14-item resilience scale [@wagnild_development_1993]. Items were assessed on a 7-point scale ranging from *strongly disagree* to *strongly agree* with higher scores indicating higher levels of resilience. An example items was, "I usually manage one way or another."

### Data Simulation {-}

Below is the code I used to simulate data. The following code assumes 8 participants who each participated in 3 waves (pre, post, followup). The sript produces "long" and "wide" forms are created.

```r
set.seed(2022)
# gives me 8 numbers, assigning each number 3 consecutive spots, in
# sequence
ID <- factor(c(rep(seq(1, 8), each = 3)))
# gives me a column of 24 numbers with the specified Ms and SD
Resilience <- rnorm(24, mean = c(5.7, 6.21, 6.26), sd = c(0.88, 0.79, 0.37))
# repeats pre, post, follow-up once each, 8 times
Wave <- rep(c("Pre", "Post", "FollowUp"), each = 1, 8)
Amodeo_long <- data.frame(ID, Wave, Resilience)

Amodeo_long$Wave <- factor(Amodeo_long$Wave, levels = c("Pre", "Post",
    "FollowUp"))

# Create a new df (Amodeo_wide) Identify the original df We are
# telling it to connect the values of the Resilience variable its
# respective Wave designation
Amodeo_wide <- reshape2::dcast(data = Amodeo_long, formula = ID ~ Wave,
    value.var = "Resilience")
# doublecheck to see if they did what you think
str(Amodeo_wide)
```

```
'data.frame':	8 obs. of  4 variables:
 $ ID      : Factor w/ 8 levels "1","2","3","4",..: 1 2 3 4 5 6 7 8
 $ Pre     : num  6.49 4.43 4.77 5.91 4.84 ...
 $ Post    : num  5.28 5.95 6.43 7 6.28 ...
 $ FollowUp: num  5.93 5.19 6.54 6.19 6.24 ...
```

```r
Amodeo_wide$ID <- factor(Amodeo_wide$ID)
```

## Computing the Omnibus F {-}

Without the *rstatix* helper package, here is how the analysis would be run in the package, *car.*  Although this package is less intuitive to use, it results in both univariate output (both sphericity assumed and sphericity violated) and multivariate output (which does not require the sphericity assumption).

Evaluating the data requires that we create some objects that will be fed into function. We can name these objects anything we like.

In ths script below I define the objects that are required.

* waveLevels is an object that will specify three levels of the independent variable (pre, post, follow-up),
* waveFactor simply makes "waveLevels" a factor
* waveBind column-binds (i.e., cbind) the pre, post, and follow-up variables from the wide form of the Amodeo dataset
* waveModel calculates the intercept (i.e., the means) of the pre, post, and follow-up levels



```r
# library(car)
waveLevels <- c(1, 2, 3)
waveFactor <- as.factor(waveLevels)
waveFrame <- data.frame(waveFactor)
waveBind <- cbind(Amodeo_wide$Pre, Amodeo_wide$Post, Amodeo_wide$FollowUp)
waveModel <- lm(waveBind ~ 1)
waveModel
```

```

Call:
lm(formula = waveBind ~ 1)

Coefficients:
             [,1]   [,2]   [,3] 
(Intercept)  5.588  6.328  6.137
```
To run the analysis, we insert these objects into arguments:

* waveModel is the first argument,
* waveFrame is assigned to the *idata* command,
* waveFactor is assigned to the *idata* command


```r
analysis <- car::Anova(waveModel, idata = waveFrame, idesign = ~waveFactor)
```

```
Note: model has only an intercept; equivalent type-III tests substituted.
```

```r
summary(analysis)
```

```

Type III Repeated Measures MANOVA Tests:

------------------------------------------
 
Term: (Intercept) 

 Response transformation matrix:
     (Intercept)
[1,]           1
[2,]           1
[3,]           1

Sum of squares and products for the hypothesis:
            (Intercept)
(Intercept)    2607.062

Multivariate Tests: (Intercept)
                 Df test stat approx F num Df den Df          Pr(>F)    
Pillai            1    0.9942 1200.028      1      7 0.0000000043326 ***
Wilks             1    0.0058 1200.028      1      7 0.0000000043326 ***
Hotelling-Lawley  1  171.4325 1200.028      1      7 0.0000000043326 ***
Roy               1  171.4325 1200.028      1      7 0.0000000043326 ***
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

------------------------------------------
 
Term: waveFactor 

 Response transformation matrix:
     waveFactor1 waveFactor2
[1,]           1           0
[2,]           0           1
[3,]          -1          -1

Sum of squares and products for the hypothesis:
            waveFactor1 waveFactor2
waveFactor1   2.4131705  -0.8378898
waveFactor2  -0.8378898   0.2909282

Multivariate Tests: waveFactor
                 Df test stat approx F num Df den Df  Pr(>F)
Pillai            1 0.4026101 2.021846      2      6 0.21319
Wilks             1 0.5973899 2.021846      2      6 0.21319
Hotelling-Lawley  1 0.6739486 2.021846      2      6 0.21319
Roy               1 0.6739486 2.021846      2      6 0.21319

Univariate Type III Repeated-Measures ANOVA Assuming Sphericity

            Sum Sq num Df Error SS den Df   F value         Pr(>F)    
(Intercept) 869.02      1   5.0692      7 1200.0279 0.000000004333 ***
waveFactor    2.36      2   4.2272     14    3.9102        0.04476 *  
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1


Mauchly Tests for Sphericity

           Test statistic p-value
waveFactor        0.56648 0.18179


Greenhouse-Geisser and Huynh-Feldt Corrections
 for Departure from Sphericity

            GG eps Pr(>F[GG])  
waveFactor 0.69759    0.06754 .
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

              HF eps Pr(>F[HF])
waveFactor 0.8172743 0.05734876
```
The *car::Anova()* function produces both univariate and multivariate results. To begin to understand this data, let's start with what we learned in the [one-way repeated measures ANOVA lesson](#Repeated).

### Univariate Results {-}

When we ran the univariate approach in the lesson, we first checked the sphericity assumption. Our results here are identical to those from *rstatix::anova_test*. That is, we did not violate the sphericity assumption:  Mauchley's test $= .566 p = 0.182$. Although I do not see the complete *F* string, we learn that, if we had violated the sphericity assumption, that:

>The Greenhouse Geiser estimate was 0.698 the corrected  *p* = .068.
>The Huyhn Feldt estimate was 0.817 and the corrected *p* = .057.

The univariate ANOVA results are under the "Univariate Type III REpeated-Measures ANOVA Assuming Sphericity" heading. We find the ANOVA output on the row titled, "waveFactor." The results are identical to what we found in teh lesson:   $F(2,14) = 3.91, p = 0.045$. I do not see that an effect size is reported.

### Multivariate Results {-}

Researchers may prefer the multivariate approach because it does not require the sphericity assumption. Stated another way, if the sphericity assumption is violated, researchers can report the results of the multivariate analysis.

We find the multivariate results in the middle of the output, under the heading, "Multivariate Tests: waveFactor." There are four choices: Pillai, Wilks, Hotelling-Lawley, and Roy. Green and Salkind [-@green_one-way_2017-1] have noted that in the one-way within-subjects ANOVA, all four will yield the same *F* and *p* values. They recommended reporting Wilks' lambda because researchers will have greatest familiarity with it. Thus, I would write up the result of this omnibus test like this:

>Results of the one-way repeated measures ANOVA indicated a significant wave effect, $Wilks' \lambda = .597, F(2,6) = 2.022, p = 0.213$.

Because follow-up testing is *pairwise* (i.e., there are only two levels being compared), the sphericity assumption is not required and those could proceed in the manner demonstrated in the [one-way repeated measures ANOVA lesson](#Repeated).

### A Brief Commentary on Wrappers

As noted several times, because of its relative ease-of-use, the relevance of information included in the results, and its integration with the *ggpubr* package, I chose to use *rstatix* package in all of the ANOVA lessons. As I worked through this example, I spent several hours creating and interpreting the code. For me, there was value in this exercise:

* I am encouraged and reassured with the consistency of results between the two approaches,
* I am in awe of the power of these programs and a little intimidated by all the options that are available within a given package, and
* I am deeply grateful to package developers who take the time to create packages for discipline-specific use-cases and then freely share their work with others. Thank you [Alboukadel Kassambara](https://github.com/kassambara/rstatix)!
