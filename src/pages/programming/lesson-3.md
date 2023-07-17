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

Click [here](https://gm0.org/en/latest/docs/software/tutorials/mecanum-drive.html#:~:text=Mecanum%20Physics,%2C%20translating%20while%20rotating%2C%20etc) to learn about how mecanum drive works and how to code it.

### Sample Mecanum Code

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
            // joystick (these values can also be replaced with any values between -1 and 1)
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