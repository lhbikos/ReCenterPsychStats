# Ready Set R


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
Acc_sim30B <- data.frame(ID, COND, Accurate)
```

### Save the resulting data as a .csv or .rds file in the same file as you saved the .rmd file.

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

### Clear your environment (broom in upper right).

You only need to import the .csv or .rds file; I have demonstrated both. 
Open the .csv file from my local drive.

```r
from_CSV <- read.csv("to_CSVb.csv", header = TRUE)
```


Open the .rds file from my local drive.

```r
from_rds <- readRDS("to_RobjectB.rds")
```

### Run the describe() function from the psych package with your simulated data that you imported from your local drive.

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

