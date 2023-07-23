---
title: Setup Your workspace
description: This page will show you the necessary steps to start coding your FTC robot.
layout: ../../layouts/MainLayout.astro
---
### Welcome to your first programming lesson
## Setting up android studios
### Turn on android studios
![turn on studio](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/windows-Shortcut.png?raw=true)
Lets start setting up your workspace. Android studios should already be installed, so boot it up. \
After you have done so, we are ready to start.

### Set Up Git(Version Control)
First, download git [Here](https://github.com/git-for-windows/git/releases/download/v2.41.0.windows.3/PortableGit-2.41.0.3-64-bit.7z.exe). \
\
Run the executable after downloading, and go through the steps to download. Remember to put the downloaded file somewhere you can find, as this will be necessary later.

### Set-up Roadrunner Quickstart
Next, you will have to import a FTC quickstart project. \
Why do we import a project? A empty project means that it isnt set up to communicate with the hardware, and there will not be a library, for you to use, when coding. \
We will use Git, a version control system, to backup our project and code. \
\
Select the **`Get From VCS`** option.
![Right option to import](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/GetFromVCS.png?raw=true) \
\
Select **`Configure`**. \
![Right option to import](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/GitConfigure.png?raw=true) \
\
Select the little File icon. \
![File Select](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/FileSelect.png?raw=true) \
\
Now, locate the file location in which you put the git download from the last step.\
Then, navigate into the file and find git-bash.exe, go ahead and select it. \
![File Location Select](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/FileLocation.png?raw=true) \
\
apply the settings. \
\
Now, copy [This Link](https://github.com/acmerobotics/road-runner-quickstart) and paste it into the URL input. \
![URL input](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/URL.png?raw=true) \
\
Press Clone, and the Quickstart project has now been setup.

### Sync Gradle
Now that we have setup the quickstart, we need to sync the gradle. \
Gradle is a automation tool for multi-language software developement, which is what the FTC library is. \
\
To sync, it we need to locate the gradle sync button, at the top right corner of the screen.
![Gradle button location](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/programming/lesson-1/GradleButton.png?raw=true) \
\
Press it, and then wait. \
After a few minutes, the sync is completed. \
\
**Congrats on finishing your setup!**


## Testing the setup

### Push Hello World(do with telemetry)
### Run code
