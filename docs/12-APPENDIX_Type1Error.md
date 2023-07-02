# APPENDICES {-}

# Type I Error {#type1}

## Type I Error Defined {-}

*Type I error* is the concern about false positives -- that we would incorrectly reject a true null hypothesis (that we would say that there is a statistically significant difference when there is not one). This concern is increased when there are multiple hypothesis tests. This concern increases when we have a large number of pairwise comparisons.

Throughout the chapters, I noted the importance and relative risk of Type I error with each statistic and options for follow-up testing. Because there are so many options, I have provided a review and summary of each option in this appendix. For each, I provide a definition, a review of the steps and options for utilizing the statistic, and suggest the types of follow-up for which this approach is indicated.

## Methods for Managing Type I Error {-}


### LSD (Least Significant Difference) Method {-}

The LSD method is especially appropriate in the one-way ANOVA scenario when there are only three levels in the factor. In this case, Green and Salkind [-@green_using_2017] have suggested that alpha can be retained at the alpha level for the "family" ($\alpha_{family}$), which is conventionally $p = .05$ and used both to evaluate the omnibus and, so long as they don't exceed three in number, the planned or pairwise comparisons that follow. 

### Traditional Bonferroni {-}

The *traditional Bonferroni* is, perhaps, the most well-known approach to managing Type I error. Although the lessons in this OER will frequently suggest another approach to managing Type I error, I will quickly review it now because, conceptually it is easy to understand. We start by establishing the $\alpha\alpha_{family}$; this is traditionally $p = .05$.

Next, we determine how many pairwise comparisons that we are going to conduct. If we are going to conduct all possible comparisons, we could use this formula: $N_{pc}=\frac{N_{g}(N-1)}{2}$, where

* $N_{pc}$ is the number of pairwise comparisons, and
* $N_{g}$ is the number of groups.

In the one-way ANOVA research vignette, the COND factor had three levels: control, low, high. Thus, if we wanted to conduct all possible comparisons we would detrmine $N_{pc}$ this way:


```r
3*(3-1)/2
```

```
## [1] 3
```
Subsequently, we would compute a new alpha that would be used for each comparison with this formula: $\alpha_{pc}=\frac{\alpha_{family}}{N_{pc}}$.

In the one-way ANOVA research vignette we would calculate it this way:


```r
.05/3
```

```
## [1] 0.01666667
```
If we were to use the traditional Bonferroni to manage Type I error, the resultant $p$ value would need to be < .017 in order for statistical significance to be claimed.

Luckily, each of these options has been reverse-engineered so that we do not have to determine the more conservative alpha levels. Instead, when we specify these options (and, as you will see, more) in the script, the *p* value is adjusted and we can continue to use the customary $p < .05, p < .01$ and $p < .001$ levels of interpretation. In the case of the traditional Bonferonni, the *p* value  an be adjusted upward by multiplying it (i.e., the raw *p* values) by the number of comparisons being completed. This holds the *total* Type I error rate across these tests to be $\alpha$ (usually 0.05). Further, most *R* packages allow specification of one or more types of *p* values in the script. The result is the Type 1 error-adjusted *p* values.

Although the traditional Bonferroni is easy-to-understand and computer, it has been criticized as being too restrictive. That is, it increases the risk of making a Type II error (i.e., failing to reject the null hypothesis when it is false). This is why the majority of follow-up options to ANOVA did not use the traditional Bonferroni.

### Tukey HSD {-}

The Tukey HSD (honestly significant difference test) is a multiple comparison procedure used to identify significant differences between means of multiple groups. In the ANOVA context, it examines which specific pairs of groups differ from one another. The Tukey HSD was designed to control for Type I error. It does so by calculating the difference between the largest and smallest group means, then dividing this mean difference by the standard error of the same mean difference. The resulting statitic, *q* has an associated Studentized Range Distribution. Critical values for this distribution come from a Studentized Range q Table and are based on based on the alpha level, the number of groups, and the denominator degrees of freedom (i.e., $df_W$). 

The Tukey HSD ("Tukey's honestly significantly different") test automatically controls for Type I error (i.e., false positives) by using the studentized range distribution to calculate a critical value. Subsequently, it compares the difference between pairs of means to this critical value. In the *rstatix* package, the *tukey_hsd()* function will perform the t-tests of all possible pairwise combinations. The Tukey HSD *p* value is automatically adjusted. In fact, there is nothing additional that can be specified about *p* values (i.e., there are no other choice options). 

I had intended to demonstrate this with the one-way ANOVA chapter, but could not get the results to render a figure with the significance bars and results. An online search suggested that I am not the only one to have experienced this glitch.

### Holms Sequential Bonferroni {-}

The Holm's sequential Bonferroni [@green_using_2017] offers a middle-of-the-road approach (not as strict as .05/9 with the traditional Bonferroni; not as lenient as "none") to managing Type I error. 

If we were to hand-calculate the Holms, we would rank order the *p* values associated with the 9 comparisons in order from lowest (e.g., 0.000001448891) to highest (e.g., 1.000). The first *p* value is evaluated with the most strict criterion (.05/9; the traditional Bonferonni approach). Then, each successive comparison calculates the *p* value by using the number of *remaining* comparisons as the denominator (e.g., .05/8, .05/7, .05/6). As the *p* values increase and the alpha levels relax, there will be a cut-point where remaining comparisons are not statistically significant. Luckily, most R packages offer the Holm's sequential Bonferroni as an option. The algorithm behind the output rearranges the mathematical formula and produces a *p* value that we can interpret according to the traditional values of $p < .05, p < .01$ and $p < .001$.
[@green_using_2017]


