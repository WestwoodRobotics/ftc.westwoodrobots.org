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

```
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

```
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

```
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

#### Scenario:

##### Make an integer num1 and num2. Give them any integer variable you want. Next add num1 to num2, and then subtract num2 from num2, and print out num2.

#### Our Variable Values for Our Solution:

##### num1: 3

##### num2: 5

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

```
num2: 0
```

<h4 style='color:#f5b042' >Medium: Performing Arithmetic Equations<h4>

#### Scenario:

##### Make a variable num1 and assign it to what you want. Next subtract 12, add 23, add 1.5, multiply it by 2, divide it by 4, and get the remainder of num1 being divided by 3.

#### Our Variable Values for Our Solution:

##### num1: 9.5

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

```
num1: 2.0
```

<h4 style='color:#f54242' >Hard: Find Slope<h4>

#### Scenario:

##### Given variables x1, y1, x2, and y2. Find the slope made by these points. Remember slope formula is rise over run.

#### Our Variable Values for Our Solution:

##### x1: 4

##### y1: 7

##### x2: 15

##### x1: -43

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

```
Slope: -4.545454545454546
```

#### Congrats on Finishing Java Basics!!!!!!

## Conditionals

### Conditional Operators

#### What are Conditional Operators?

##### Conditional operators are signs used to compare values. If you remember in math you can compare values by using statements such as 6 > 3, and this is what where going to be doing.

| Sign     | Meaning                                     |
| -------- | ------------------------------------------- |
| #1 == #2 | Checks if #1 is equal to #2                 |
| #1 != #2 | Checks if #1 is not equal to #2             |
| #1 > #2  | Checks if #1 is greater than #2             |
| #1 < #2  | Checks if #1 is less than #2                |
| #1 >= #2 | Checks if #1 is greater than or equal to #2 |
| #1 <= #2 | Checks if #1 is less than or equal to #2    |

### Conditional Statements

#### Using Conditional Statements

##### Here are some examples of these conditional statements being used in code.

#### Example:

```java
boolean equals = 1==1;
System.out.println("equals: "+equals);

boolean notEquals = 1!=2;
System.out.println("notEquals: "+notEquals);

boolean greaterThan = 2>1;
System.out.println("greaterThan: "+greaterThan);

boolean lessThan = 1<2;
System.out.println("lessThan: "+lessThan);

boolean greaterThanEquals = 2>=1;
System.out.println("greaterThanEquals: "+greaterThanEquals);

boolean lessThanEquals = 2<=2;
System.out.println("lessThanEquals: "+lessThanEquals);

boolean greaterThan2 = 1>2;
System.out.println("greaterThan2: "+greaterThan2);
```

#### Prints:

```
equals: true
notEquals: true
greaterThan: true
lessThan: true
greaterThanEquals: true
lessThanEquals: true
greaterThan2: false
```

### Conditional If Statements

#### How Conditionals Should Be Used!

##### Now although you can use conditional to give variables a value, conditional are mainly used in if statements. Look at the examples bellow to get a feel for if statements

```java
int num1 = 1;
int num2 = 2;

if (num1 < num2) {
    System.out.println("your CORRECT");
}
else {
    System.out.println("your WRONG");
}

num1 = 2;
num2 = 1;

if (num1 < num2) {
    System.out.println("your CORRECT");
}
else {
    System.out.println("your WRONG");
}
```

#### Prints:

```
your CORRECT
your WRONG
```

##### \*Before we continue play around trying the different signs, try out <, >, <=, >=, and ==.\*

### Extending If Statements

##### In java you can just do an if condition without an else statement, and if the if condition is false than the only thing that happens is that nothing happens. In if statements the else statement acts as the finisher for the conditionals. Meaning you can do an if statement, and then another, and another, and lastly once you put the else statements you can no longer put any more if statements. Here lets look at some examples so it makes more sense.

#### Example:

```java
int num1 = 1;
int num2 = 2;
int num3 = 3;
int num4 = 4;
int num5 = 5;

if (num1 > num5) {
    System.out.println("num1 is greater than num5");
}
else if (num2 > num5) {
    System.out.println("num2 is greater than num5");
}
else if (num3 > num5) {
    System.out.println("num3 is greater than num5");
}
else if (num4 > num5) {
    System.out.println("num4 is greater than num5");
}
else {
    System.out.println("num5 is the largest number");
}
// play around changing the numbers to test it out
```

#### Prints:

```
num5 is the largest number
```

### Nesting If Statements

##### Nesting if statements is just a fancy way of saying that you put an if statement inside and if statement

##### Here lets make up a scenario. Imagen we were sorting through a list of numbers and one of those numbers is 20, and we pass the number through various if conditions to decide wether the number is a cool number.

#### Scenario:

```java
int numTest = 20;

if ( numTest < 100) {
    if (numTest > 0) {
        if (numTest != 19) {
            System.out.println(numTest+" is a cool number");
        }
        else {
            System.out.println(numTest+" is not a cool number");
        }
    }
    else {
        System.out.println(numTest+" is not a cool number");
    }
}
else {
    System.out.println(numTest+" is not a cool number");
}
// play around changing the number and seeing what it prints
```

#### Prints:

```
20 is a cool number
```

##### As you saw above nesting if statements can be used to check if something passes various conditions and many more things.

#### More Signs

##### As you saw above, to check wether the number passed the various criterias we nested various if statements. But instead of doing this we can use the operators bellow to do that with less code, making our code cleaner.

| Sign                         | Meaning                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1bool && 2bool               | The && sign is like if and only if 1boolean true and 2boolean true, then execute whats in the if statements body                                 |
| 1bool 2 straght dashes 2bool | This next statement will be shown properly in the code. This sign means if either 1boolean or 2boolean is true then execute body of if statement |

#### Example:

```java
int numTest = 20;

if (numTest < 100 && numTest > 0 && numTest != 19) {
    System.out.println(numTest+" is a cool number");
}
else {
    System.out.println(numTest+" is not a cool number");
}

boolean bool1 = true;
boolean bool2 = false;

/*
the sign || acts as saying if either bool1 or bool2
are true then execute whats inside the body of the if statement
*/
if (bool1 || bool2) {
    System.out.println("It worked")
}
else {
    System.out.println("It didn't work")
}
// play around changing the booleans values
```

#### Prints:

```
20 is a cool number
```

##### \*Notice how by using the && sign we where able to check for various conditions at once, thus making our code cleaner. And by using the || sign we can make a situation where there are various possible right awnsers.

### Practice!

<h4 style='color:#a1f542' >Easy: Biggest Number<h4>

#### Scenario:

##### Given the integers num1 and num2, check which number is larger, and print it out.

#### Our Variable Values for Our Solution:

##### num1: 5

##### num2: 48

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

#### Solution:

```java
int num1 = 5;
int num2 = 48;

if (num1 > num2) {
    System.out.println("num1 is bigger");
}
else if (num2 > num1) {
    System.out.println("num2 is bigger");
}
else if (num1 == num2) {
    System.out.println("their the same number");
}
```

#### Prints:

```
num2 is bigger
```

<h4 style='color:#f5b042' >Medium: Find biggest Amongst Three<h4>

#### Scenario:

##### Given three integers num1, num2, and num3 find the biggest number amongst the three of them and print it out. \*Asuume there is a definitive biggest number.

#### Our Variable Values for Our Solution:

##### num1: 13

##### num2: 15

##### num3: 11

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

#### Solution:

```java
int num1 = 13;
int num2 = 15;
int num3 = 11;

/*
although you can do a bunch of nested if statements you'll quickly
notice that your code will become messy and unreadable.
While making this question we noticed that, which is why there's
a warning to assume that there is a definitive biggest number.
Later on we will face this problem again except that time there
will be 28 numbers and there might be various largest numbers,
but you will also have learned arrays and loops.
 */

if (num1 > num2) {
    if (num1 > num3) {
        System.out.println("num1 is the biggest");
    }
}
else if (num2 > num1) {
    if (num2 > num3) {
        System.out.println("num2 is the biggest");
    }
}
else if (num3 > num1) {
    if (num3 > num2) {
        System.out.println("num2 is the biggest");
    }
}
```

#### Prints:

```
num2 is the biggest
```

<h4 style='color:#f54242' >Hard: Are Students Eligible<h4>

#### Scenario:

##### Two Students are seeing if they are eligible to enter the prestige program. Each student has 3 variables that describe one of their qualities that are analyzed in order for their eligibility into the program to be decided. Those three being, their grade point average, absences, and YODLE test grade.

##### Grade Point Average(GPA) Range: 0 - 100

##### Absences(AB) Range: 0 - 10

##### YODLE Test(YODLET) Range: 0 - 100

##### Passing Criteria: GPA > 80, AB < 4, and YODLET > 90

##### \*If both pass then compare their scores to see which one is more qualified. To do this just simply see which student wins in more criterias. Meaning if student 1 has a better GPA and YODLET grade than student 2 then student 1 beats student 2 in two criterias while student 2 only wins in one, so student 1 is the only one that is accepted into the program. Lastly just print which student is accepted.

#### Our Variable Values for Our Solution:

##### Student 1 GPA = 81;

##### Student 1 AB = 2;

##### Student 1 YODLET = 93;

##### Student 2 GPA = 98;

##### Student 2 AB = 1;

##### Student 2 YODLET = 99;

#### STOP SCROLLING SOLUTION IS BELLOW!!!!

```java
int stud1GPA = 81;
int stud1AB = 2;
int stud1YT = 93;
boolean stud1Pass = false;

int stud2GPA = 98;
int stud2AB = 1;
int stud2YT = 99;
boolean stud2Pass = false;

if (stud1GPA > 80 && stud1AB < 4 && stud1YT > 90) {
    stud1Pass = true;
}
if (stud2GPA > 80 && stud2AB < 4 && stud2YT > 90) {
    stud2Pass = true;
}

if ( stud1Pass == true && stud2Pass == true) {
    int stud1Wins = 0;
    if (stud1GPA > stud2GPA) {
        stud1Wins += 1;
    }
    if (stud1AB < stud2AB) {
        stud1Wins += 1;
    }
    if (stud1YT > stud2YT) {
        stud1Wins += 1;
    }

    if (stud1Wins >= 2) {
        System.out.println("student 1 joins the program");
    }
    else {
        System.out.println("student 2 joins the program");
    }
}
else {
    if (stud1Pass == true) {
        System.out.println("student 1 joins the program");
    }
    else {
        System.out.println("student 2 joins the program");
    }
}
```

#### Prints:

```
student 2 joins the program
```

#### Congrats on Finishing Java Conditionals!!!!!!

## Loops

## Arrays

## Methods

## Object Oriented Programming

## Extra Resources
- [gm0 link on how java is used in FTC](https://gm0.org/en/latest/docs/software/getting-started/fundamental-concepts.html)
- [W3Schools](https://www.w3schools.com/java/)
