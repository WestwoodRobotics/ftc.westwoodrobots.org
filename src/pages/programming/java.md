---
title: Java
description: About teleoperative programs in FTC
layout: ../../layouts/MainLayout.astro
---

## Java Basics

### Initilizing Variables

##### \*Open replit and follow along :)

#### Why Variables?

##### In programming a variable is used to store values such as a number, a string, and more.

#### Example

```java
// this stores the number 1 on the varaible num1
int num1 = 1;
```

<!-- - [code sandbox](https://codesandbox.io/s/new) -->

#### Test it out!

```java
int num1 = 1;
// prints out num1
System.out.println(num1);
```

#### Primitive Variable Types:

| Type    | Bytes | Range                                                   |
| ------- | ----- | ------------------------------------------------------- |
| byte    | 1     | [-128, 127]                                             |
| short   | 2     | [-32K, 32K]                                             |
| int     | 4     | [-2B, 2B]                                               |
| long    | 8     | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,808 |
| float   | 4     | 3.4e-45 to 3.4e38                                       |
| double  | 8     | 4.9e-324 to 1.8e308                                     |
| char    | 2     | a, b, c,... or A, B, C,...                              |
| boolean | 1     | true/false                                              |

#### Why the name primitive variable?

##### The reason we call these variables primitive types is because the variable stores the value that is given to that variable. This means that when you give the value of 1 to num1 and then print it, it will print the number 1. Now I know this sounds obvious, but the namig will make more sense once we learn about non-primitive variables.

#### Primitive Variable Examples

```java
byte byte1 = 35;
System.out.println("byte1: "+byte1);

short short1 = 31000;
System.out.println("short1: "+short1);

int int1 = 500000;
System.out.println("int1: "+int1);

long long1 = 1000000000;
System.out.println("long1: "+long1);

float float1 = 2.3223359473510f;
System.out.println("float1: "+float1);

double double1 = 3.4030591;
System.out.println("double1: "+double1);

char char1 = 'a';
char char2 = 'A';
System.out.println("char1: "+char1);
System.out.println("char2: "+char2);

boolean bool1 = true;
System.out.println("bool1: "+bool1);
```

#### Prints:

```terminal
byte1: 35
short1: 31000
int1: 500000
long1: 1000000000
float1: 2.322336
double1: 3.4030591
char1: a
char2: A
bool1: true
```

### Arithmetic Operators

#### Why Arthimetic Operators?

##### Arthimetic Operators are a way we can do math in coding. Although later on we will also learn about the Math class that has many other math terms such as pi, sin, and more.

| Sign | Example  | Explanation                                                                        |
| ---- | -------- | ---------------------------------------------------------------------------------- |
| +    | 1+1 = 2  |                                                                                    |
| -    | 1-1 = 0  |                                                                                    |
| \*   | 2\*2 = 4 |                                                                                    |
| /    | 2/2 = 1  |                                                                                    |
| %    | 3%5 = 3  | gives remainder 3, because 5 goes into 3 zero times, meaning our remainder is 3.   |
| %    | 5%3 = 2  | Ex2: gives remainder of 2 since three goess into 5 once, leaving a remainder of 2. |

#### Code Examples:

```java
int sum = 1 + 1;
System.out.println("sum: "+sum);

int minus = 1 - 1;
System.out.println("minus: "+minus);

int multiplication = 2 * 2;
System.out.println("multiplication: "+multiplication);

int division = 2 / 2;
System.out.println("division: "+division);

// % is name modulus
int modulus1 = 3 % 5;
System.out.println("modulus1: "+modulus1);

int modulus2 = 5 % 3;
System.out.println("modulus2: "+modulus2);
```

#### Prints:

```terminal
sum: 2
minus: 0
multiplication: 4
division: 1
modulus1: 3
modulus2: 2
```

### Arthimetic Operators Expansion

#### Try this out!

```java
int num1 = 2;
System.out.println("(Sum)num1 before: "+num1);
num1 = num1 + 2;
System.out.println("(Sum)num1 after: "+num1);

int num2 = 2;
System.out.println("(Sum)num2 before: "+num2);
num2 += 2;
System.out.println("(Sum)num2 after: "+num2);

System.out.println("-------- Spacer --------");

int num3 = 2;
System.out.println("(Minus)num3 before: "+num3);
num3 = num3 - 2;
System.out.println("(Minus)num3 after: "+num3);

int num4 = 2;
System.out.println("(Minus)num4 before: "+num4);
num4 -= 2;
System.out.println("(Minus)num4 after: "+num4);

System.out.println("-------- Spacer --------");

int num5 = 2;
System.out.println("(Multiplication)num5 before: "+num5);
num5 = num5 * 2;
System.out.println("(Multiplication)num5 after: "+num5);

int num6 = 2;
System.out.println("(Multiplication)num6 before: "+num6);
num6 *= 2;
System.out.println("(Multiplication)num6 after: "+num6);

System.out.println("-------- Spacer --------");

int num7 = 2;
System.out.println("(division)num7 before: "+num7);
num7 = num7 / 2;
System.out.println("(division)num7 after: "+num7);

int num8 = 2;
System.out.println("(division)num8 before: "+num8);
num8 /= 2;
System.out.println("(division)num8 after: "+num8);

System.out.println("-------- Spacer --------");

int num9 = 5;
System.out.println("(division)num9 before: "+num9);
num9 = num9 % 3;
System.out.println("(division)num9 after: "+num9);

int num10 = 5;
System.out.println("(division)num10 before: "+num10);
num10 %= 3;
System.out.println("(division)num10 after: "+num10);
```

#### Prints:

```terminal
(Sum)num1 before: 2
(Sum)num1 after: 4
(Sum)num2 before: 2
(Sum)num2 after: 4
-------- Spacer --------
(Minus)num3 before: 2
(Minus)num3 after: 0
(Minus)num4 before: 2
(Minus)num4 after: 0
-------- Spacer --------
(Multiplication)num5 before: 2
(Multiplication)num5 after: 4
(Multiplication)num6 before: 2
(Multiplication)num6 after: 4
-------- Spacer --------
(division)num7 before: 2
(division)num7 after: 1
(division)num8 before: 2
(division)num8 after: 1
-------- Spacer --------
(division)num9 before: 5
(division)num9 after: 2
(division)num10 before: 5
(division)num10 after: 2
```

##### As you can see instead of having to do num1 = num1+1, you can instead do num1 += 1.

### Practice!

<h4 style='color:#a1f542' >Easy: Adding Nums<h4>

##### Make an integer num1 and num2. Give them any integer variable you want. Next add num1 to num2, and then subtract num2 from num2, and print out num2.(To follow our example assign num1 a value of 3 and num2 a value of 5).

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

#### Solution:

```java
int num1 = 3;
int num2 = 5;

num2 += num1;
num2 -= num2;

System.out.println("num2: "+num2);
```

#### Result:

```terminal
num2: 0
```

<h4 style='color:#f5b042' >Medium: Performing Arithmetic Equations<h4>

##### Make a variable num1 and assign it to what you want(assign it to 9.5 to follow our solution). Next subtract 12, add 23, add 1.5, multiply it by 2, divide it by 4, and get the remainder of num1 being divided by 3.

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

#### Solution:

```java
double num1 = 9.5;
num1 -= 12;
num1 += 23;
num1 += 1.5;
num1 *= 2;
num1 /= 4;
num1 %= 3;
System.out.println("num1: "+num1);
```

#### Result:

```terminal
num1: 2.0
```

<h4 style='color:#f54242' >Hard: Find Slope<h4>

##### Given variables x1, y1, x2, and y2. Find the slope made by these points. (Our solution will assign x1: 4, y1: 7, x2: 15, y2: -43). Remember slope formula is rise over run.

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

#### Solution:

```java
double x1 = 4;
double y1 = 7;
double x2 = 15;
double y2 = -43;

double m = (y2-y1)/(x2-x1);
System.out.println("Slope: "+m);
```

#### Result:

```terminal
Slope: -4.545454545454546
```

#### Congrats on Finishing Java Basics!!!!!!

## Conditionals & Loops

## Arrays

## Methods

## Object Oriented Programming
