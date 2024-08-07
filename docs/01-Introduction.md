# Introduction {#ReCintro}

[Screencasted Lecture Link](https://youtube.com/playlist?list=PLtz5cFLQl4KNYW8LcbhOR_WT_As4xskQM)

## What to expect in each chapter

This textbook is intended as *applied,* in that a primary goal is to help the scientist-practitioner-advocate use a variety of statistics in research problems and *writing them up* for a program evaluation, dissertation, or journal article. In support of that goal, I try to provide just enough conceptual information so that the researcher can select the appropriate statistic (i.e., distinguishing between when ANOVA is appropriate and when regression is appropriate) and assign variables to their proper role (e.g., covariate, moderator, mediator).

This conceptual approach does include *hand-calculations* (using R to do the math for us) to provide a *visceral feeling* of what is happening within the statistical algorithm that may be invisible to the researcher. Additionally, the conceptual review includes a review of the assumptions about the characteristics of the data and research design that are required for the statistic. 

Statistics can be daunting, so I have worked hard to establish a *workflow* through each analysis. When possible, I include a flowchart that is referenced frequently in each chapter and assists the researcher keep track of their place in the many steps and choices that accompany even the simplest of analyses.

As with many statistics texts, each chapter includes a *research vignette.* Somewhat unique to this resource is that the vignettes are selected from recently published articles. Each vignette is chosen with the intent to meet as many of the following criteria as possible:

* the statistic that is the focus of the chapter was properly used in the article,
* the author’s identity is from a group where scholarship is historically marginalized (e.g., BIPOC, LGBTQ+, LMIC [low middle income countries]),
* the research has a justice, equity, inclusion, diversity, and social responsivity focus and will contribute positively to a social justice pedagogy, and 
* there is sufficient information in the article to simulate the data for the chapter example(s) and practice problem(s); or the data is available in a repository. 

Each chapter features functions and code from *R* packages that will efficiently calculate the statistic and the dashboard of metrics (e.g., effect sizes, confidence intervals) that are typically reported in psychological science. Each worked example concludes with an *APA style results section* that is intended to be used as a model or recipe that is appropriate for many empirical manuscripts. Where possible, hints are provided that will make the production of tables and figures straightforward.

The practice problems are suggestions for homework. Most chapters include suggestions for both working the problem with R and R packages as well as hand calculations. The suggestions for homework are designed to met you where you are. If you are feeling less confident about your ability (or, perhaps short on time), you can choose the easiest options (e.g., changing the random seed and reworking the problem which should be nearly identical to the worked example); with more confidence or time you might choose to work the problem with another variable; with abundant confident (or perhaps a need to do so) you might choose to your own data, data that is available to you, or simulated data from another source. Repetition and practice might mean that you do each of these options.

Finally, many lessons concludes with a *homeworked example*. This section provides a streamlined working of the problem with R or R packages. When the ANOVA models become more complex, there are often a myriad of ways to approach a problem. I have tried to select one that is sensible to me.  The *homeworked examples* draw from a project associated with a recently published project of my own [@bikos_grad_2024], focused on teaching statistics in a socially responsible way. The associated dataset is available on the OER's [GitHub site](https://github.com/lhbikos/ReCenterPsychStats/blob/main/Worked_Examples/ReC.rds) as well as in a [pre-registered repository](https://osf.io/z84kh/) on the Open Science Framework (OSF). An explanation of this study and codebook for the variables is provided at the end of the this lesson.


## Strategies for Accessing and Using this OER

There are a number of ways you can access this resource. You may wish to try several strategies and then select which works best for you. I demonstrate these in the screencast that accompanies this chapter.

1. Simply follow along in your preferred format of the book (html, PDF, or ebook) and then
   * open a fresh .rmd file of your own, copying (or retyping) the script and running it 
  
2. Locate the original documents at the [GitHub repository](https://github.com/lhbikos/ReCenterPsychStats). You can
   * open them to simply take note of the "behind the scenes" script
   * copy/download individual documents that are of interest to you
   * clone a copy of the entire project to your own GitHub site and further download it (in its entirety) to your personal workspace. The [GitHub Desktop app](https://desktop.github.com/) makes this easy!
  
3. Listen to the accompanying lectures (I think sound best when the speed is 1.75). The lectures are being recorded in Panopto and should include the closed captioning.

4. Each time the book is updated, new .docx (Microsoft Word), PDF (Adobe Acrobat), and ebook(EPUB File) versions are also created. You can access these in the "docs" folder at the [GitHub repository](https://github.com/lhbikos/ReCenterPsychStats).

4. Provide feedback to me! If you fork a copy to your own GitHub repository, you can 
   * open up an editing tool and mark up the document with your edits,
   * start a discussion by leaving comments/questions, and then
   * sending them back to me by committing and saving. I get an e-mail notifying me of this action. I can then review (accepting or rejecting) them and, if a discussion is appropriate, reply back to you.
   * I am also seeking peer-review feedback at this [Qualtrics-hosted survey](https://spupsych.az1.qualtrics.com/jfe/form/SV_0OnBLfut3VIOIS2). You are welcome to complete only the portions that are relevant to you.

## If You are New to R

R can be oveRwhelming. Jumping right into advanced statistics might not be the easiest way to start. The [Ready_Set_R](https://lhbikos.github.io/ReCenterPsychStats/Ready.html) lesson of this volume provides an introduction and the [Preliminary Analyses](https://lhbikos.github.io/ReCenterPsychStats/preliminaries.html) lesson walks through simple data preparation and descriptive statistics.

In the remaining lessons, I have attempted to provide complete code for every step of the process, starting with uploading the data. To help explain what R script is doing, I sometimes write it in the chapter text; sometimes leave hashtagged-comments in the chunks; and, particularly in the accompanying screencasted lectures, try to take time to narrate what the R script is doing. 

I've found that, somewhere on the internet, there's almost always a solution to what I'm trying to do. I am frequently stuck and stumped and have spent hours searching the internet for even the tiniest of tasks. When you watch my videos, you may notice that in my R studio, there is a "scRiptuRe" file. I take notes on the solutions and scripts here -- using keywords that are meaningful to me so that when I need to repeat the task, I can hopefully search my own prior solutions and find a fix or a hint. You may also find it useful to create a working document of your own tips and tricks.

## When Code Fails

R code changes frequently and without notice. We generally discover changes in packages and code, every few months, when we update R Studio, R, and R packages. As soon as feasible, we jump into the ReCentering OERs to test and fix code. This means that you may encounter code failures before we discover or fix them. 

Updating the screencasted lectures often occurs much later. If there is a discrepancy between the screencasted lectures and the code, the code is more current.

If you discover errors, please e-mail them to recenterpsychstats@gmail.com.





## Introduction to the Data Set Used for Homeworked Examples

[Screencast Link]()

Each lesson concludes with streamlined example of working the primary statistic from each lesson. This section is intended to be helpful in two ways:

* The worked example focuses on the operations and interpretations and more closely mimics "how you would work a problem in real life."
* The grading rubric from the end of each lesson serves as the outline for the process. 
* This dataset could be used for the practice problems. For homework that you submit for grading, please choose *different variables* than the ones worked in the examples.

### The Data Set

The dataset used in the "homeworked" examples is from my own research. Along long with the pre-registration and codebooks, it is publicly available in a [pre-registered repository](https://osf.io/z84kh/) on the Open Science Framework (OSF).  I have also provided a copy of it in the [GitHub repository](https://github.com/lhbikos/ReCenterPsychStats/blob/main/Worked_Examples/ReC.rds) that hosts the ReCentering Psych Stats OER.

This data is from an IRB-approved study. The informed consent of the IRB specified that the data could be used in research as well as in teaching demonstrations and would be made available to the general public. You may notice there are student- and teacher- IDs. These numbers are *not** the institution's identification numbers. Rather, they have been further anonymized. 

The purpose of the research project was to evaluate efforts to recenter – in a socially responsive way – courses in the statistics and research methods sequence in scientist-practitioner psychology (PhD) programs. The recentering occurred in two phases:  (a) a transition from SPSS to R and (b) an explicit recentering. Data were from end-of-course evaluations three courses I taught: Research Methods I: Analysis of Variance [ANOVA], Research Methods III: Multivariate Modeling [multivariate], and Research Methods IV: Psychometrics/Theory of Test Construction [psychometrics]) that were offered 2017 through 2022.

Because students could contribute up to three course evaluations, each, multilevel modeling was used for the primary analyses. The nature of the data, though, allows me to demonstrate all of the statistics utilized the OER with this data. For each analysis, I have tried to derive a sensible question that *could be* answered by the data. In-so-doing, I try to point out when the alignment of research question and statistic is less than ideal.

The data file is titled *ReC.rds* and can be retrieved with this code:


``` r
dfReC <- readRDS("ReC.rds")
```

The following can serve as a codebook:

|Variable        |Definition or Description                            |Scaling|
|:---------------|:----------------------------------------------------|:------------------------|
|deID            |Anonymized identification for each student Each student could contribute up to three course evaluations |Nominal/factor |
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
|:---------------|:-------------------------------------------------------------------|
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


``` r
ReCdf <- readRDS("ReC.rds")
```





