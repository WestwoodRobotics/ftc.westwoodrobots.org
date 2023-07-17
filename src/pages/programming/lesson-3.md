---
title: Lesson 3 - Drivetrains
description: Tank Drive and Mecanum Drive
layout: ../../layouts/MainLayout.astro
---

## Types of Drivetrains
There are 2 main types of drivetrains: tank drive and mecanum drive. In Lesson 3, you'll learn about how each drivetrain works and how to code them.


## Tank Drive
### Tank Drive Theoretically
Tank drive is the simpler and more straightforward drivetrain. In tank drive, each side of the robot is controlled individually. In order for the robot to move forward or backwards, all 4 wheels move forward or backwards. For the robot to turn, one side has to move forward and the other side has to move backward.

### How To Code A Tank Drive
First, you initialize your motors.

```java
@TeleOp(name="Teleop")
public class Teleop extends OpMode { //declaring all of the motors
    private DcMotorEx frontRight;
    private DcMotorEx frontLeft;
    private DcMotorEx backRight;
    private DcMotorEx backLeft;

    public void init() { //initializing all of the motors
        frontRight = hardwareMap.get(DcMotorEx.class, "frontRight");
        frontLeft = hardwareMap.get(DcMotorEx.class, "frontLeft");
        backRight = hardwareMap.get(DcMotorEx.class, "backRight");
        backLeft = hardwareMap.get(DcMotorEx.class, "backLeft");
    }
}
```

After initializing your motors, you need to set the direction of your motors. 

```java
frontRight.setDirection(DcMotorEx.Direction.REVERSE);
frontLeft.setDirection(DcMotorEx.Direction.FORWARD);
backRight.setDirection(DcMotorEx.Direction.REVERSE);
backLeft.setDirection(DcMotorEx.Direction.FORWARD);
```

After setting the direction of the motors, you need to set variables for the power for each wheel. This value needs to be between -1 and 1.

```java
double frontRightPower = 0;
double frontLeftPower = 0;
double backRightPower = 0;
double backLeftPower = 0;
waitForStart();
```

The part of the code where the power is actually supplied to the motors takes place in a while loop.

```java
while (opModeIsActive()) {
    frontRight.setPower(frontRightPower);
    frontLeft.setPower(frontLeftPower);
    backRight.setPower(backRightPower);
    backLeft.setPower(backLeftPower);
}
```

The values for the power of each wheel can be changed depending on the direction that you want the robot to move. For example, if you want the robot to go forward, all the values would be set to 1. If you want the robot to turn right, "frontRight" and "backRight" would be set to -1, and "frontLeft" and "backLeft" would be set to 1. Positive values mean that the wheels move forward, and negative values mean that the wheel moves backwards. The greater the magnitude of the value, the more power there is supplied to the wheel.


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
```java
//This gives a power of 1 for each motor, making each wheel go forward

frontLeft.setPower(1);
frontRight.setPower(1);
backLeft.setPower(1);
backRight.setPower(1);

//This would make the robot move forward, as every wheel is going forward
```

Now, our problem is that we need to set each motor's power differently based on the x and y values of the left and right joysticks of the controller. We can make it easier to implement by going one motor at a time. 

Let's start with the frontLeft motor. If the left joystick was moved forward, which direction would it need to spin? (Hint: Check the diagram for the mecanum wheel directions)

```java

//The frontLeft motor would need to spin forward
frontLeft.setPower(gamepad1.left_stick_y)
//This sets the power of the motor to the vertical component of the left joystick 
```

We also need to get the inputs from the left stick's horizontal component, or x value, and the right stick's y value. You can do the same method of thinking "if the joystick is moved this way, which direction would the wheel turn?".

In the end, you should have this code:

```java
frontLeft.setPower(gamepad1.left_stick_y + gamepad1.left_stick_x + gamepad1.right_stick_x);
```


### Sample Full Mecanum Code (code from one of our FTC robots last year)

```java
@TeleOp()
public class MecanumDrive extends LinearOpMode{
    // initialize motors
    DcMotor frontRight = null;
    DcMotor frontLeft = null;
    DcMotor backRight = null;
    DcMotor backLeft = null;
    @Override
    public void runOpMode() {
        // map motors to robot
        frontRight = hardwareMap.get(DcMotor.class, "frontRight");
        frontLeft = hardwareMap.get(DcMotor.class, "frontLeft");
        backRight = hardwareMap.get(DcMotor.class, "backRight");
        backLeft = hardwareMap.get(DcMotor.class, "backLeft");

        // set direction
        frontRight.setDirection(DcMotor.Direction.REVERSE);
        frontLeft.setDirection(DcMotor.Direction.FORWARD);
        backRight.setDirection(DcMotor.Direction.REVERSE);
        backLeft.setDirection(DcMotor.Direction.FORWARD);

        // initialize power
        double frontRightPower = 0;
        double frontLeftPower = 0;
        double backRightPower = 0;
        double backLeftPower = 0;
        waitForStart();

        while (opModeIsActive()) {
            // joystick 
            //these values can also be replaced with any values between -1 and 1
            double drive = gamepad1.left_stick_y;
            double strafe = gamepad1.left_stick_x;
            double turn = gamepad1.right_stick_x;

            // set power
            frontRightPower = drive + strafe - turn;
            frontLeftPower = drive - strafe + turn;
            backRightPower = drive - strafe - turn;
            backLeftPower = drive + strafe + turn;

            frontRight.setPower(frontRightPower * 0.75);
            frontLeft.setPower(frontLeftPower * 0.75);
            backRight.setPower(backRightPower * 0.75);
            backLeft.setPower(backLeftPower * 0.75);
        }
    }
}

```
Click [here](https://gm0.org/en/latest/docs/software/tutorials/mecanum-drive.html#:~:text=Mecanum%20Physics,%2C%20translating%20while%20rotating%2C%20etc) to learn about how mecanum drive works and how to code it.

This is a really helpful picture for understanding the directions and mecanum equations:

![](https://gm0.org/en/latest/_images/mecanum-drive-directions.png)