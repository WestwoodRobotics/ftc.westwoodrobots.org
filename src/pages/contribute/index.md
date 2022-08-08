---
title: Contribute to this Website
description: Step by step instructions on how to add and edit pages on this website.
layout: ../../layouts/MainLayout.astro
---

###### Remember that this website is for a school club, keep it school appropriate.*

## How to Contribute to this Website
Contributing to this site is a great opportunity to aid Westwood Robotics in its mission as well as gain experience through teaching.

If you want to contribute, just follow these steps. (no programming experience required!)
<!--- TODO: Once the Github tutorial is complete, just change the first step to a link to the Github page --->
### Step 1: Become a Member
Make sure that you are a member of the Westwood Robotics Github organization. 

#### How to check if you are already a member:
On the [Westwood Robotics Organization Github Page](https://github.com/WestwoodRobotics), click on the people section ![](wwroboftc/src/pages/contribute/2022-08-07-17-12-53.png) or follow this [link](https://github.com/orgs/WestwoodRobotics/people).
> if you don't have a github account already, [create one](https://github.com/signup)

#### If you are not already a member:
Fill out this [google form](https://forms.gle/suwh3sPg8qEHCRez5) (must be logged into RRISD email to do so) and we will add you to the organization as soon as possible.

### Step 2: Accessing your page
I'll start this step with instructions on how to access a page for editing, then end with how to create one.

#### Open the project in Github
On the [Westwood Robotics Page](https://github.com/WestwoodRobotics) in Github, navigate to the repositories tab and open the repository titled ```wwroboftc```.

> if you have a preferred IDE, feel free to follow the next few steps using your IDE after [cloning the project](/wwroboftc/programming/GitHub) to your computer.

Click on the ```pages``` folder.
IMAGE

Inside of the pages folder navigate to whichever folder contains the page that you would like to edit.

> NOTE: the pages titled ```index.md``` are in reality called whatever folder name which they are in. For example, index.md inside of the programming folder is the page westwoodrobotics.github.io/wwroboftc/programming.

Once you've found the file you want to edit, open it up. 

### Step 3: laying down your knowledge

#### Edit the md file
You can edit the pages using **Markdown**. If you do not know what markdown is, learn about it [here](https://www.markdownguide.org/cheat-sheet/) (its just for formatting).

If you want to embed google slides, google docs, or need any help with editing the md file, contact [Reet (Discord: DrIronfist#2548)](https://discord.com/users/726608190023663666), [Jadon (Discord: jadopotato#4717)](https://discord.com/users/542163475380830208), or [Abraham (Discord: Cesar_Oso#7229)](https://discord.com/users/770472531324698624).

#### Creating a New Page
If you want to add something to the website that wouldn't fit in any of the already present pages, you can create a new page.

##### Find a Folder
Find a folder (programming, CAD, etc..) that best suites your new page. If you feel that there needs to be a new folder, then contact [Reet (Discord: DrIronfist#2548)](https://discord.com/users/726608190023663666), [Jadon (Discord: jadopotato#4717)](https://discord.com/users/542163475380830208), or [Abraham (Discord: Cesar_Oso#7229)](https://discord.com/users/770472531324698624). 

##### Create a file
Create a new file that ends in ```.md```. Whatever you name this file will be the URL extension. For example, if you call your file ```programming-autons.md``` and put it in the ```programming``` folder, your page can be reached at westwoodrobotics.github.io/wwroboftc/programming/programming-autons. When you write your file name make sure that it has **no spaces**, as this will do wierd stuff to the URL.

##### Add this
Before you do anything to the file, copy and paste the following code to the top of the md file:
```
---
title: the title of your page (will be displayed on your page)
description: a description of your page (will be displayed on your page)
layout: ../../layouts/MainLayout.astro
---
```
> don't change that last line unless your md file is 
> - inside of a folder inside of a folder in the pages folder (add a ../)
> - or inside only the pages folder (take away one ../)
> in which cases you would have to change the number of ../s 

After this you should be good to go adding [markdown to your page and editing the file](#edit-the-md-file)!
> NOTE: **DO NOT** add anything between the sets of ```---```!!!

### Other Changes to the Site
If you have or want to gain programming experience, head over to the [issues](https://github.com/WestwoodRobotics/wwroboftc/issues) tab of this repository on github to find coding tasks that need working on.

Even if you don't feel like writing any code but feel strongly that there need to be changes to the site (not related to page content), then feel free to [add an issue](https://github.com/WestwoodRobotics/wwroboftc/issues) and mark it as an enhancement (for new feautres/styling) or bug (for problems). Remember, issues on github does not always mean problems.

### Troubleshooting
First try googling your issue. If that doesn't work, then contact [Reet (Discord: DrIronfist#2548)](https://discord.com/users/726608190023663666), [Jadon (Discord: jadopotato#4717)](https://discord.com/users/542163475380830208), or [Abraham (Discord: Cesar_Oso#7229)](https://discord.com/users/770472531324698624). 




