---
title: Lesson 2
description: Manipulating Motors and Taking Input from Controllers.
layout: ../../layouts/MainLayout.astro
---

## Welcome to Lesson 2!
In this lesson, you will learn about programming motors and how to control them using input.

## Motors
### Making A New Motor In Teleop
One of the motor classes that we use (the best one!!!) is the [DcMotorEx class](https://ftctechnh.github.io/ftc_app/doc/javadoc/index.html?com/qualcomm/robotcore/hardware/DcMotorEx.html)
We declare them at the beginning of the code, inside of the Teleop class, and initialize them in the init() method. A lot of the other code will be explained but make sure to pay attention to how we declare and initialize the motor ("private DcMotorEx" and "hardwareMap").
```java
@TeleOp(name="Teleop")
public class Teleop extends OpMode { //declaring all of the motors
    private DcMotorEx frontLeft;
    private DcMotorEx frontRight;
    private DcMotorEx backLeft;
    private DcMotorEx backRight;

    public void init() { //initializing all of the motors
        frontLeft = hardwareMap.get(DcMotorEx.class, "frontLeft");
        frontRight = hardwareMap.get(DcMotorEx.class, "frontRight");
        backLeft = hardwareMap.get(DcMotorEx.class, "backLeft");
        backRight = hardwareMap.get(DcMotorEx.class, "backRight");
    }
}
```
### Setting The Direction Of The Motor
Motors have one way they spin, and it's easy to have motors spinning the wrong way when powered. In order to fix this, we can use a handy method called setDirection(). As seen in the code below, we can set each motor to either "REVERSE" or "FORWARD". Setting the direction of the motor is usually done in the init() method.
```java
frontLeft.setDirection(DcMotorEx.Direction.REVERSE);
frontRight.setDirection(DcMotorEx.Direction.FORWARD);
backLeft.setDirection(DcMotorEx.Direction.REVERSE);
backRight.setDirection(DcMotorEx.Direction.FORWARD);
```
You can test the direction your motors by setting the power of each motor to one and seeing which way they spin. 
### Setting The Power Of The Motor
In order to set a power to the motor, we use the setPower() method. This method takes in a double (decimal) from 0 to 1. A power value of 1 means to spin the motor at max power. 
```java
frontLeft.setPower(1);
frontRight.setPower(1);
backLeft.setPower(1);
backRight.setPower(1);
```
One drawback of using setPower() is that the speed at which the motors rotate is based on the voltage of the battery, so if the battery is low, the motors will spin slowly.
### Running Code
### Take Input From Controller
The parent class (or superclass) of your teleop is the OpMode Class (note the "extends OpMode" in code above). The OpMode class has two gamepad variables declared - gamepad1 and gamepad2. The controller you will most likely be using is the one shown below:

![](https://preview.redd.it/1z70ah4vgoy71.png?width=256&format=png&auto=webp&s=b45eece3aa56f8cf4e12ffd9c0e9c86abd50397f)

Here are the names of the main controls for the gamepad:
| Control    | Code |
| -------- | ------- |
|Left Stick X Value|left_stick_x|
|Left Stick Y Value|left_stick_y|
|Right Stick X Value|right_stick_x|
|Right Stick Y Value|right_stick_y|
|Left Bumper Button|left_bumper|
|Right Bumper Button|right_bumper|
|Left Trigger Button|left_trigger|
|Right Trigger Button|right_trigger|
|Dpad Up|dpad_up|
|Dpad Down|dpad_down|
|Dpad Left|dpad_left|
|Dpad Right|dpad_Right|
|Button A|a|
|Button B|b|
|Button X|x|
|Button Y|y|

### Telemetry
Telemetry is a very useful way to check the robot's status from the driver hub. Most of the time, it will be used for things like initialization or runtime, but you can also use it to debug code and test code.
The two main methods that are used for updating data in Telemetry are addData() and addLine().
```java
telemetry.addData("Status", "Initialized"); //prints on the screen "Status : Initialized"
telemetry.addLine("Running!!!!!") //prints on the screen "Running!!!!!"
telemetry.addLine("Hello World!"); //brings your robot to life and makes it start questioning its identity