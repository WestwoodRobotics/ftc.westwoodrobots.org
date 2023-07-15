---
title: Lesson 2
description: Manipulating Motors and Taking Input from Controllers. Motor go brrr
layout: ../../layouts/MainLayout.astro
---

## Welcome to Lesson 2!
In this lesson, you will learn about programming motors and how to control them using input.

## Motors
### Making A New Motor In Teleop
One of the motor classes that we use is the [DcMotorEx Class](https://ftctechnh.github.io/ftc_app/doc/javadoc/index.html?com/qualcomm/robotcore/hardware/DcMotorEx.html)
We declare them at the beginning of the code, inside of the Teleop class, and initialize them in the init() function.
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