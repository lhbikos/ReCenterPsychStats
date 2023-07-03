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

* **Valued by the student** includes the items: ValObjectives, IncrUnderstanding, IncrInterest

* **Traditional pedagogy** includes the items: ClearResponsibilities, EffectiveAnswers, Feedback, ClearOrganization, ClearPresentation

* **Socially responsive pedagogy** includes the items: InclusvClassrm, EquitableEval, MultPerspectives, DEIintegration

In the examples where the scale scores are used, I provide code for calculating the means.

Here's how to import the data:


```r
ReCdf <- readRDS("ReC.rds")
```
