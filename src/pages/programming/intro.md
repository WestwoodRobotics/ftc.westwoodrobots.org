---
title: Introduction to FTC Java
description: Getting Started with FTC Programming
layout: ../../layouts/MainLayout.astro
---

# Introduction

For more explanation of Java look through [W3Schools](https://www.w3schools.com/java/) an amazing site

## Hardware

### Control System
The computer which runs your code and sends commands to motors, servos, etc. 
![](https://2589213514-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M4_pJHI8HTuZFQTNfcy%2F-MBpCmvIrVFvA8xIOsaF%2F-MBpL115FB5wBz2nt6HA%2FControl_Hub_Wiring_Diagram_FTC_Kit_2020_3.png?alt=media&token=f8d21e42-2ca2-4723-87fa-ef905c5b8666)

This can be paired with a expansion hub to use more motors and servos and sensors.

[Rev Documentation on Control System](https://docs.revrobotics.com/duo-control/)

### Driver station
<img src="https://2589213514-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M4_pJHI8HTuZFQTNfcy%2F-Meez4dA5ROtbExbO3rp%2F-Mef-NbV-gDoaPN6Irwa%2FDriveHub_DS%20navigation1.svg?alt=media&token=057e5efb-053b-434b-87cb-7c4bcd951e35" width="350"/>
<img src="https://2589213514-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M4_pJHI8HTuZFQTNfcy%2F-Meez4dA5ROtbExbO3rp%2F-Mef-PY2EjvmCLVD8ZmZ%2FDriveHub_DS%20navigation2.svg?alt=media&token=6e46ac42-c415-473f-803b-d08ee1c93a02" width="350"/>

1. Initialize, start, and stop programs
Only available when a program has been selected.
2. Telemetry display 
Displays telemetry outputs. 
​
Displays any system warnings and error codes
3. Active configuration
Displays which configuration file is currently active. 
​
If this section says <no config file> you will need to activate or [create a configuration file](https://docs.revrobotics.com/duo-control/programming/hello-robot-configuration). 
4. Network information
Displays Control Hub SSID Name, signal strength, and ping time.
5. Gamepad connections. 
See [Connecting GamePads](https://docs.revrobotics.com/duo-control/driver-hub-gs#connecting-gamepads) for more information. 
6. Autonomous drop down menu 
Drop down menu that displays all autonomous programs saved on the Control Hub. 
7. Teleop drop down menu 
Drop down menu that displays all teleop programs saved on the Control Hub. 
8. System power display
Displays the amount of battery voltage powering the robot, when connected to a Control Hub.
9. Settings drop down menu
Access settings, configure the robot, restart the robot, check to see if your system meets competition inspection requirements and more. 
10. Practice Timer
A built in timer that can be used to to practice for different portions of a match. 
[REV Documentation](https://docs.revrobotics.com/duo-control/driver-hub-gs)


## What is an OpMode

### A Few Terms Explained
- class: In simple definition, a class in Java groups code together and each class oin Java is stored in a file with the same class name with .java in the end.

Ex: 
```java
public class HelloWorld{

}
```
- method: A method is a group of code that you can call to complete some actions like turn on robot, etc.

Ex:
```java
public void TestMethod(){
    System.out.println("Hello World");
}
```

- package: a directory(folder) where code is located. For FTC, there are many packages that we use that help us control the robot with code. Packages can have packages inside them.

Ex: 
```java
import testpacakge
```

### Definition: 
In FTC, An OpMode is a program for our robot. We can have multiple OpModes. They are all stored in the TeamCode package.


### Parts of an OpMode
![](https://drive.google.com/uc?export=view&id=1laxpt_mUw1yN9TH3KRcOthYmN3SAdyFD)

These following methods must be defined
1. init() - This is run once when the driver presses
INIT.
2. loop() - This is run repeatedly after driver presses
PLAY but before STOP.

Optional methods
1. init_loop() - This is run repeatedly after driver
presses INIT but before PLAY.
2. start() - This is run once when the driver presses
PLAY.
3. stop()- This is run once when the driver presses
STOP.

### Hello World of FTC Programming
```java
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

@TeleOp()
public class HelloWorld extends OpMode {
   @Override
   public void init() {
      telemetry.addData("Hello","World");
   }

   @Override
   public void loop() {

   }
}
```
#### Breakdown of what happened
```java
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
```
The first line tells you where it is located
the second and third line are packages from the FTC SDK(Software Development Kit) Packages

---

```java
@TeleOp()
```
You **must** include the line above otherwise the OpMode won't show up on the Driver Station. The `@` signified that line is an annotation. You can choose from `@Teleop` or `@Autonomous` depending on if the OpMode is for driver controlled period or the 30 second autonomous period at the start of the a match. With these annotation you can also include Another annotation you can use is `@Disabled` if you don't want the OpMode to show up in the Driver Station.
```java
@TeleOp(name="Test Name", group="Test Group Name")
// For this example it will show up on the Driver Station as Test Name
```
---

```java
public class HelloWorld extends OpMode {

}
```
Let's talk about the different parts in this blurb:
- The keyword `public` means other classes can see it. Required for OpModes to actually work.
- The keyword `class` means we are defining a Java class.
- `HelloWorld` is the name of the class we just created and it must be the same name as the java file (HelloWorld.java)
- The naming of the class uses Pascal Case which means combining the words and captializing the first letter of the words. For example, Blue Auton is `BlueAuton`
- `extends OpMode` means that this class is a child of OpMode. A child gets all of the behavior and functionality of its parent. To learn more on inheritance visit [W3Schools](https://www.w3schools.com/java/java_inheritance.asp)
- a class is defined with opening `{` and closing `}`

---

```java
 @Override
 public void init() {
    telemetry.addData("Hello","World");
    // Prints "Hello: World"
 }
```
Parts of this method:
- `@Override` is another annotation which tells the computer to to replace(override) a method or function from the parent class which in this case is OpMode
- `public` means this method is callable from outside this class. This is a type of modifier which lets other classes see this method of this class
- `void` is the return type meaning what data the method will give when it is called. If it is void, then it returns nothing hence void.
- `telemetry.addData("Hello", "World);` is calling a method from the FTC SDK which lets us show data on the Driver Hub's Telemetry Display.
[More about methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html#:~:text=The%20only%20required%20elements%20of,you%20will%20learn%20about%20later.)

Notice how defining methods and classes don't require semicolons (`;`) but calling a method does. All statements in Java either end with a semi-colon or have a set of curly braces attached.

<!-- ## Try it out!


## Comments

## Sending to the Robot Controller

## Common problems -->
