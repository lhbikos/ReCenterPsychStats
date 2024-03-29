# Ready_Set_R {#Ready}

[Screencasted Lecture Link](https://youtube.com/playlist?list=PLtz5cFLQl4KPVmAkrTNyX_3VuVlPP1cXB) 
 


With the goal of creating a common, system-wide approach to using the platform, this lesson was originally created for Clinical and Industrial-Organizational doctoral students who are entering the "stats sequence." I hope it will be useful for others (e.g., faculty, post-doctoral researchers, and practitioners) who are also making the transition to R. 
 
## Navigating this Lesson

There is about 45 minutes of lecture. 

While the majority of R objects and data you will need are created within the R script that sources the chapter, occasionally there are some that cannot be created from within the R framework. Additionally, sometimes links fail. All original materials are provided at the [Github site](https://github.com/lhbikos/ReCenterPsychStats) that hosts the book. More detailed guidelines for ways to access all these materials are provided in the OER's [introduction](#ReCintro)

### Learning Objectives

Learning objectives from this lecture include the following:

* Downloading/installing R's parts and pieces.
* Using R-Markdown as the interface for running R analyses and saving the script.
* Recognizing and adopting best practices for "R hygiene."
* Identifying effective strategies for troubleshooting R hiccups.

## downloading and installing R

### So many paRts and pieces

Before we download R, it may be helpful to review some of R's many parts and pieces.

The base software is free and is available [here](https://www.r-project.org/) 

Because R is already on my machine (and because the instructions are sufficient), I will not walk through the demo, but I will point out a few things.

* The "cran" (I think "cranium") is the *Comprehensive R Archive Network.* In order for R to run on your computer, you have to choose a location -- and it should be geographically "close to you." 
  + Follow the instructions for your operating system (Mac, Windows, Linux)
  + You will see the results of this download on your desktop (or elsewhere if you chose to not have it appear there) but you won't ever use R through this platform.
* [R Studio](https://www.rstudio.com/products/RStudio/) is the way in which we operate R. It's a separate download. Choose the free, desktop, option that is appropriate for your operating system:  
* *R Markdown* is the way that many analysts write *script*, conduct analyses, and even write up results. These are saved as .rmd files.
  + In R Studio, open an R Markdown document through File/New File/R Markdown
  + Specify the details of your document (title, author, desired ouput)
  + In a separate step, SAVE this document (File/Save] into a NEW FILE FOLDER that will contain anything else you need for your project (e.g., the data).
  + *Packages* are at the heart of working in R. Installing and activating packages require writing script.
 
**Note** If you are working on an *enterprise-owned machine* (e.g,. in my specific context, if you are a faculty/staff or have a lab with institution-issued laptops) there can be complications caused by how documents are stored. In recent years we have found that letting the computer choose where to load base R, R Studio, and the packages generally works. The trick is to save R projects (i.e., folder with .rmd files and data) into the OneDrive folder that syncs to your computer. If you have difficulty knitting that is unrelated to code/script (which you can evaluate by having a classmate or colleague successfully knit on their machine), it is likely because you have saved the files to the local hard drive and not OneDrive. If you continue to have problems I recommend consulting with your computer and technology support office.
 
### oRienting to R Studio (focusing only on the things we will be using first and most often)

R Studio is organized around four panes. These can be re-sized and rearranged to suit your personal preferences.

* Upper right window
  + Environment: lists the *objects* that are available to you (e.g., dataframes)
* Lower right window
  + *Files*: Displays the file structure in your computer's environment. Make it a practice to (a) organize your work in small folders and (b) navigate to that small folder that is holding your project when you are working on it.
  + *Packages*: Lists the packages that have been installed. If you navigate to a specific package, you will know if it is "on" because its box is checked. You can also access information about the package (e.g., available functions, examples of script used with the package) in this menu. This information opens in the "Help" window.
  + The *Viewer* and *Plots* tabs will be useful, later, in some advanced statistics when we can simultaneously examine output and script in windows that are side-by-side.
* Upper left window
  + If you are using R Markdown, that file lives here and is composed of open space and chunks.
* Lower left window
  + R Studio runs in the Console (the background). Very occasionally, I can find useful troubleshooting information here.
  + More commonly, I open my R Markdown document so that it takes up the whole screen.

## best pRactices

Many initial problems in R can be solved with good R hygiene. Here are some suggestions for basic practices. It can be tempting to "skip this." However, in the first few weeks of class, these are the solutions I am presenting (and repeating, ad nauseum) to my students.

### Everything is documented in the .rmd file

Although others do it differently, I put *everything* in my .rmd file. That is, my R script includes code for importing data and opening packages. Additionally, I make notes about the choices I am making. Relatedly, I keep a "bug log" -- noting what worked and what did not work. I will also begin my APA style results section directly in the .rmd file.

Why do I do all this? Because when I return to my project hours or years later, I have a permanent record of very critical things like (a) where my data is located, (b) what version I was using, and (c) what package was associated with the functions.

### Setting up the file

File organization is a critical key to success. In your computing environment:

* Create a project file folder.
* Put the data file in it.
* Open an R Markdown file.
* Save it in the same file folder as the data.
* When your data and .rmd files are in the same folder (not your desktop, but a specific folder) the data can be pulled into the .rmd file without creating a working directory.


### Script in chunks and everything else in the "inline text" sections

The R Markdown document is an incredible tool for integrating text, tables, and analyses. This entire OER is written in R Markdown. A central feature of this is "chunks."

The only thing in the chunks should be script for running R. You can also hashtag comments so they won't run (but you can also write anything you want between chunks without using hashtags).

Syntax for simple formatting in the text (i.e., non-chunk) areas (e.g., using italics, making headings, bold) is found here: https://rmarkdown.rstudio.com/authoring_basics.html

"Chunks" start and end with three tic marks and will show up in a shaded box. Chunks have three symbols in their upper right. Those controls will disappear (and your script will not run) if you have replaced them with double or single quotation marks or one or more of the tics are missing.

The easiest way to insert a chunk is to use the INSERT/R command at the top of this editor box. You can also insert a chunk with the keyboard shortcut: CTRL/ALT/i


```r
# hashtags let me write comments to remind myself what I did here I
# am simply demonstrating arithmetic (but I would normally be running
# code)
2021 - 1966
```

```
[1] 55
```

### Managing packages

As scientist-practitioners (and not coders), we will rely on *packages* to do much of the work. At first you may feel overwhelmed about the large number of packages that are available. Soon, though, you will become accustomed to the ones most applicable to our work (e.g., psych, tidyverse, rstatix, apaTables).

Researchers treat packages differently. In these lectures, I list all the packages we will use in an opening chunk at the beginning of the lecture. When the hashtags are removed, the script will ask R to check to see if the package is installed on your machine. If it is, installation is skipped. If it is not, R installs it. Simply remove the hashtag to run the code the first time, then hashtag them back out so R is not always re-checking.


```r
# will install the package if not already installed
# if(!require(psych)){install.packages('psych')}
```

To make a package operable, you need to open it. There are two primary ways to do this. The first is to use the library function.


```r
#install.packages ("psych")
library (psych)
```

The second way is to place a double colon between the package and function. This second method has become my preferred practice because it helps me remember what package goes with each function. It can also prevent R hiccups when there are identical function names and R does not know which package to use. Below is an example where I might ask for descriptives from the psych package. Because I have not yet uploaded data, I have hashtagged it out, making the command inoperable.


```r
#psych::describe(mydata)
```

There are exceptions. One is the *tidyverse* package. Some of my script uses pipes (%>%) and pipes require *tidyverse* to be activated. This is why you will often see me call the *tidyverse* package with the *library()* function (as demonstrated above.)


### Upload the data 

When imported (or simulated) properly, data will appear as an object in the global environment. 

In the context of this OER, I will be simulating data in each lesson for immediate use in the lesson. This makes this web-based OER more *portable.* This also means that when working the problems in the chapter we do notneed to (a) write the data to a file or (b) import data from files. Because these are essential skills, I will demonstrate this process here -- starting with simulating data.

At this point, simulating data is beyond the learning goals I have established for the chapter. I do need to include the code so that we get some data. The data I am simulating is used in the [one-way ANOVA lesson](#oneway). The data is from the Tran and Lee [-@tran_you_2014] random clinical trial. 

In this simulation, I am simply creating an ID number, a condition (High, Low, Control), and a score on the dependent variable, "Accurate." More information about this study is included in the [one-way ANOVA chapter](#oneway). 


```r
# Note, this simulation results in a different datset than is in the
# OnewayANOVA lesson sets a random seed so that we get the same
# results each time
set.seed(2021)
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

At this point, this data lives only in this .rmd file after the above code is run. Although there are numerous ways to export and import data, I have a preference for two. 

#### To and from .csv files

The first is to write the data to a .csv file. In your computer's environment (outside of R), these files are easily manipulated in Excel. I think of them as being "Excel lite" because although Excel can operate them, they lack some of the more advanced features of an Excel spreadsheet.

In the code below, I identify the R object "Acc_sim30" and give it a file name, "to_CSV.csv". This file name must have the .csv extension. I also indicate that it should preserve the column names (but ignore row names; since we don't have row names).

This file will save in the same folder as wherever you are using this .rmd file.


```r
# to write it to an outfile as a .csv
write.table(Acc_sim30, file = "to_CSV.csv", sep = ",", col.names = TRUE,
    row.names = FALSE)
```

Importing this object back into the R environment can be accomplished with some simple code. For the sake of demonstration, 


```r
# to save the df as an .csv (think 'Excel lite') file on your
# computer; it should save in the same file as the .rmd file you are
# working with
from_CSV <- read.csv("to_CSV.csv", header = TRUE)
```

The advantage of working with .csv files is that it is then easy to inspect and manipulate them outside of the R environment. The disadvantage of .csv files is that each time they are imported they lose any formatting you may have meticulously assigned to them. 


#### To and from .rds files

While it is easy enough to rerun the code (or copy it from data prep .rmd and paste it into an .rmd you are using for advanced analysis), there is a better way! Saving the data as an R object preserves all of its characteristics.


```r
# to save the df as an .rds file on your computer; it should save in
# the same file as the .rmd file you are working with
saveRDS(Acc_sim30, "to_Robject.rds")
```

This file will save to your computer (and you can send it to colleagues). However, it is not easy to "just open it" in Excel. To open an .rds file and use it (whether you created it or it is sent to you by a colleague), use the following code:


```r
from_rds <- readRDS("to_Robject.rds")
```

If you are the recipient of an R object, but want to view it as a .csv, simply import the .rds then use the above code to export it as a .csv.

#### From SPSS files

Your data may come to you in a variety of ways. One of the most common is SPSS. The *foreign* package is popular for importing SPSS data. Below is code which would import an SPSS file *if I had created one*. You'll see that this script is hashtagged out because I rarely use SPSS and do not have a handy file to demo. 


```r
# opening an SPSS file requires the foreign package which I opened
# earlier from_SPSS <- foreign::read.spss ('SPSSdata.sav',
# use.value.labels = TRUE, to.data.frame = TRUE)
```

## quick demonstRation

Let's run some simple descriptives. In the script below, I am using the *psych* package. Descriptive statistics will appear for all the data in the dataframe and the output will be rounded to three spaces. Note that rather than opening the psych package with the library function, I have used the double colon convention.


```r
round(psych::describe(Acc_sim30), 3)
```

```
         vars  n  mean    sd median trimmed   mad min max range  skew kurtosis
ID*         1 90 45.50 26.12  45.50   45.50 33.36   1  90    89  0.00    -1.24
COND*       2 90  2.00  0.82   2.00    2.00  1.48   1   3     2  0.00    -1.53
Accurate    3 90  1.52  0.68   1.55    1.54  0.70   0   3     3 -0.19    -0.34
           se
ID*      2.75
COND*    0.09
Accurate 0.07
```
Because "ID" is the case ID and COND is the factor (high, low, control), the only variable for which this data is sensible is "Accurate." Nonetheless, this provides an example of how to apply a package's function to a dataset. As we progress through the text we will learn how to manage the data so that we get the specific output we are seeking.

## the knitted file

One of the coolest things about R Markdown is its capacity to *knit* to HTML, PPT, or WORD. 

* In this OER, I am writing the lessons in R markdown (.rmd files), with the package *bookdown* as a helper, and knitting the files to .html, .doc, .pdf, and .epub formats. 
* The package *papaja* is designed to prepare APA manuscripts where the writing, statistics, and references are all accomplished in a single file. This process contributes to replicability and reproducibility.
* More detailed instructions for knitting to these formats are provided in the [extRas](https://lhbikos.github.io/extRas/) mini-volume of [ReCentering Psych Stats](https://lhbikos.github.io/BikosRVT/ReCenter.html).

## tRoubleshooting in R maRkdown

Hiccups are normal. Here are some ideas that I have found useful in getting unstuck.

* In a given set of operations, you must run/execute each piece of code in order: every, single, time. That is, all the packages have to be in your library and activated.
  + If you open an .rmd file, you cannot just scroll down to make a boxplot. You need to run any *prerequisite* script (like loading files, putting the data in the global environment, etc.)
  + Lost? Clear your global environment (broom icon in the upper right) and start over. Fresh starts are good.
* Your .rmd file and your data need to be stored in the same file folder. Make unique folders for each project (even if each contains only a few files).
* If you have tried what seems apparent to you and cannot solve your challenge, do not wait long before typing warnings into a search engine. Odds are, you'll get some useful hints in a manner of seconds. Especially at first, these are common errors:
  + The package isn't loaded.
  + The .rmd file hasn't been saved yet, or isn't saved in the same folder as the data.
  + There are errors in punctuation or spelling.
* Restart R (it's quick -- not like restarting your computer). I frequently restart and clear my output and environment so that I can better track my order of operations.
* If you receive an error indicating that a function isn't working or recognized, and you have loaded the package, type the name of the package in front of the function with two colons (e.g., psych::describe(df)). If multiple packages are loaded with functions that have the same name, R can get confused.

## just *why* have we tRansitioned to R?

* It is (or at least it appears to be) the futuRe.
* SPSS individual and site licenses are increasingly expensive and limited; that is, Mplus, AMOS, HLM, or R tools may also be needed. As package development for R is exploding, we have tools to "do just about anything."
* Most graduate psychology programs are scientist/practitioner in nature and include training in "high end" statistics. Yet, many of your employing organizations will not have SPSS. R is a free, universally accessible program, that our graduates can use anywhere.

## stRategies for success

* Engage with R, but don't let it overwhelm you.
  + The *mechanical is also the conceptual*. Especially while it's *simpler*, do try to retype the script into your own .rmd file and run it. Track down the errors you are making and fix them.
  + If this stresses you out, move to simply copying the code into the .rmd file and running it. If you continue to have errors, you may have violated one of the best practices above (ask, "Is the package activated?" "Are the data and .rmd files in the same place?" "Is all the prerequisite script run?").
  + Still overwhelmed? Keep moving forward by (retrieving the original .rmd file from the GitHub repository) opening a copy of the .rmd file and just "run it along" with the lecture. Spend your mental power trying to understand what each piece does so you can translate it for any homework assignments. My suggestions for practice are intended to be parallel to the lecture with no sneaky trix.
* Copy script that works elsewhere and replace it with your datafile, variables, and so forth. 
* The leaRning curve is steep, but not impossible. Gladwell [-@gladwell_outliers_2008] taught us that it takes about 10,000 hours to get great at something (2,000 to get reasonably competent). Practice. Practice. Practice.
* Updates to R, R Studio, and the packages are necessary, but can also be problematic. Sometimes updates cause programs/script to fail (e.g., "X has been deprecated for version X.XX"). My personal practice is to update R, R Studio, and the packages a week or two before each academic term. I expect that 
  + prior scripts may need to be updated or revised with package updates, and 
  + there will be incongruencies between base R, R Studio, and the packages.
* Embrace your downward dog. And square breathing. Also, walk away, then come back.
 

## Resources for getting staRted

R for Data Science: https://r4ds.had.co.nz/

R Cookbook: http://shop.oreilly.com/product/9780596809164.do

R Markdown homepage with tutorials: https://rmarkdown.rstudio.com/index.html

R has cheatsheets for everything, here's the one for R Markdown: https://www.rstudio.com/wp-content/uploads/2015/02/rmarkdown-cheatsheet.pdf 

R Markdown Reference guide: https://www.rstudio.com/wp-content/uploads/2015/03/rmarkdown-reference.pdf

Using R Markdown for writing reproducible scientific papers: https://libscie.github.io/rmarkdown-workshop/handout.html 

Script for all of Field's text: https://studysites.uk.sagepub.com/dsur/study/scriptfi.htm

LaTeX equation editor: https://www.codecogs.com/latex/eqneditor.php

## Practice Problems

The suggestions for practice in this lesson are foundational for starting work in R. If you struggle with any of these steps, I encourage you to get consultation from a peer, instructor, or a tutor.

|Assignment Component                    | Points Possible   | Points Earned|
|:-------------------------------------- |:----------------: |:------------:|
|1. Download base R and R Studio         | 5                |_____         |
|2. Open and save an .rmd (R Markdown) file in a "sensible location" on your computer|5                |_____         |        
|3. In the .rmd file, open a chunk and perform a simple mathematical operation of your choice (e.g., subtract your birth year from this year) |5    |_____         |           
|4. Install at least three packages; we will commonly use *psych*, *tidyverse*, *dplyr*, *knitr*, *ggplot2*, *ggpubr*)            |5                 |_____  |
|5. Copy the simulation in this lesson to your .rmd file. Change the random seed and run the simulation. Save the resulting data as a .csv or .rds file *in the same file as you saved the .rmd file*. |5 | _____  |  
|6. Clear your environment (broom in upper right). Open the simulated file that you saved.  |    5  |_____  |       
|7. Run the *describe()* function from the *psych* package with your simulated data that you imported from your local drive.                 |      5        |_____  |
|8. Demonstration/discussion with a grader.                 |      5        |_____  |
|**Totals**                              |      40      |_____  |     




## Homeworked Example

[Screencast Link](https://youtu.be/ZrQUt9lidCM)

Several elements of the practice problems (i.e., download base R and R studio) are not easily demonstrated and not replicated here. These are skipped.

*If you wanted to use this example and dataset as a basis for a homework assignment, you could simply change the seed -- again. For a greater challenge, you could adjust the simulation to have different sample sizes, means, or standard deviations.*

#### Perform a simple mathematical operation:{-}

In the .rmd file, open a chunk and perform a simple mathematical operation of your choice (e.g., subtract your birth year from this year).


```r
2023 - 1966
```

```
[1] 57
```


#### Install at least three packages we will commonly use {-}

Below is code for installing three packages. Because continuous reinstallation can be problematic, I have hashtagged them so that they will not re-run.

```r
#install.packages("tidyverse")
#install.packages("ggpubr")
#install.packages("psych")
```

#### Copy the simulation in this lesson to your .rmd file. Change the random seed and run the simulation {-}


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
Acc_sim30B <- data.frame(ID, COND, Accurate)
```

#### Save the resulting data as a .csv or .rds file in the same file as you saved the .rmd file {-}

You only need to save it as a .csv or .rds file. I have demonstrated both.

Saving as a .csv file

```r
write.table(Acc_sim30B, file = "to_CSVb.csv", sep = ",", col.names = TRUE,
    row.names = FALSE)
```

Saving as an .rds file

```r
saveRDS(Acc_sim30B, "to_RobjectB.rds")
```

#### Clear your environment (broom in upper right) {-}

You only need to import the .csv or .rds file; I have demonstrated both. 
Open the .csv file from my local drive.

```r
from_CSV <- read.csv("to_CSVb.csv", header = TRUE)
```

Open the .rds file from my local drive.

```r
from_rds <- readRDS("to_RobjectB.rds")
```

#### Run the describe() function from the psych package with your simulated data that you imported from your local drive {-}

You only need to retrieve descriptives from the .csv or .rds file; I have demonstrated both. 

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





