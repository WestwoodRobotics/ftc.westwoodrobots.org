---
title: FTC Teleops
description: About teleoperative programs in FTC
layout: ../../layouts/MainLayout.astro
---

## Mecanum Drive
### Wheels
Mecanum drive is a type of drive that uses wheels that have rollers, which are attatched to the wheel typically at a 45 degree angle. Below is an example of a really cool looking mecanum wheel that I wish would be used in Westwood Robotics.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwLkzslbpw-bsHEAOoU52qA6OCr35C9w1ow&usqp=CAU)
### Movement
Because of how the rollers are attatched to the wheel, when it spins it generates a propelling force perpendicular to the wheel axle. We can use this to allow the robot to move in any direction without changing its orientation. 
Below is a diagram of the ways to move a robot based on the directions the wheels are spinning:
![](https://www.roboteq.com/images/article-images/frontpage/wheel-rotations.jpg)
### Programming
#### Controls
Let's make it so that the left joystick on the controller controls the strafing. So moving the left joystick forward moves the robot forward, moving the joystick left makes it go left, etc. We'll have the right joystick doing the turning. If the right joystick is moved left, then the robot turns left, and if it's moved right, then the robot turns right.
![](https://preview.redd.it/1z70ah4vgoy71.png?width=256&format=png&auto=webp&s=b45eece3aa56f8cf4e12ffd9c0e9c86abd50397f)

#### Code
Each wheel has a motor that can spin 2 different ways. To simplify, we can say that a power of 1 makes it go forward and a power of -1 makes it go backward. Also, we will be calling each motor frontLeft, frontRight, backLeft, and backRight.
```
//This gives a power of 1 for each motor, making each wheel go forward

frontLeft.setPower(1);
frontRight.setPower(1);
backLeft.setPower(1);
backRight.setPower(1);

//This would make the robot move forward, as every wheel is going forward
```
## Tank Drive

## Omni

## Other

### Swerve :)

### Actually Walking
