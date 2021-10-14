
// 1 values and variables in javascript

// var _1my__Name = "Ravi";
// var 1myName = "Ravi";
// var $myName = "Ravi";
// console.log($myName);

// 2 Data Types in javascript

// var myName = "Ravi";
// console.log(myName);

// typeof(operator)

// console.log(typeof(myName));

// Data types practice

// console.log(10 + "20");

9 - "4"
// console.log(9 - "4"); // Bug There in no logic

"java" + "script"
// console.log("java" + "script");

" " + " "
// console.log(" " + " ");

 " " + "0"
// console.log(" " + "0");

"Ravi" - "parmar"
// console.log("Ravi" - "parmar");

true + true
// console.log(true + true); // true represntation 1 that's what 1+1=2

true + false
// console.log(true + false); // false represntation 0 1+0=1

false + true
// console.log(false+true);

false - true
// console.log(false - true);

// 3 expression and Operators

// 1 Assignment Operator

// var x = 5;
// var y = 5;

// console.log(x==y);

// 2 Arthematic Operator
// console.log(3-3);
// console.log(5+10);
// console.log(20/5);
// console.log(5*9);

// console.log("Remainder Operator " + 81%8);


// 3 Increment and Decrement Operator
// Operator x++ or ++x or x-- or --x

// var x = 15
// var y = x++;
// console.log(x);
// console.log(y);

// var x = 45;
// var y = ++x;
// console.log(x);
// console.log(y);

// var x = 10;
// var y = --x;
// console.log(x);
// console.log(y);

// var x = 10;
// var y = x--;
// console.log(x);
// console.log(y);

// 4 Comparison Operator
// var a = 30;
// var b = 12;
// console.log(a == b);

// console.log(a != b);

// console.log( a > b);
// and so on ..

// 5 Logical operator
// Logical AND(&&)   called Conjunction 

// var x = 10;
// var y = -15;
// console.log((x>y) && (y>0) );

// Logical OR(||)    called Disjunction

// console.log((x>y) || (y>0) );

// Logical NOT(!)    called nagetive

// console.log(!((x>y) || (y>0)) );

// 6 String Concatenation(Operator)


// console.log("Hello" + "World");


// 7 Conditional (ternary) operator
// it is the only javascript operator
// that takes three operands

// var age = 19;
// console.log((age >= 18) ? "you can vote" : "you can't vote");



// console.log(3**4); // 3*3*3*3
// console.log(10** -1); // 1/10

// Write a program to swap two numbers

// var a= 5;
// var b= 10;
// var c = b;
// b=a;
// a=c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// write a program without using third variable

// var a=5;
// var b=10;
// a= a+b; // 15
// b= a-b; // 5
// a= a-b; //10

// console.log("the value of a is " + a);
// console.log("the value if b is " + b);

// Control statment and loops
/* if ...else */ 

// var tomr = "rain";

// if(tomr == "rain"){

//     console.log("take a raincoat");

// }else{

//     console.log("no need to take a raincoat");
// }

// write a program that works out weather
// if a given year is leap year or not?

// var year = 2020;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log("the year " + year + " is a leap year");

//         }else{
//             console.log("the year" + year + " is not a leap year");
//         }

//     }else{
//         console.log("the year " + year + " is a leap year");

//     }

// }else{
//     console.log("the year" + year + " is not a leap year");
// }


// what is truthy and falsy value in javascript?
// we have total 5 falsy value in javascript.
// 👉 0, "", undefined, null, NaN, false** is false anyway

// if (false){
//     console.log(" Omg, we loss the game😭");
// }else{
//     console.log("yeh, we won the match😂");
// }


/* Switch Statement */

// var area = "triangle";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case "circle" : 
//     console.log("the area of the circle is " + PI*r**2);
//     break;

//     case "triangle" :
//     console.log("the area of the triangle is " + (l*b/2));
//     break;

//     case "rectangle" :
//     console.log("the area of the rectangle is " + l*b);
//     break;

//     default :
//     console.log("please enter a valid data");
// }


/* While loop Statement*/

// var num = 0;
// it is called block scope
// while(num <= 1000){
//     console.log(num);
//     num++;
// }

/* Do-While loop Statement*/

// var num = 0;
// do{
//     console.log(num);
//     num++;
// }while(num <=20);

/* For loop Statement */

// var num = 0;
// for(num=0; num<=10; num++)
// {
//     console.log(num);
// }



// challange
// var num = 1;
// for(num=1; num<=10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// * Fuction in javascript

// Javascript function is a block of code designed to perform a paricular task.

// why Function ?

// you can reuse code: define the code once, and use it many times.
// you can use same code many times with different arguments,
// to produce different results. 

// 1 Fuction Definition

// Before we use a function, we need to define it.
// it is also called function declaration or function statement.

// function sum(){
//     var a=10, b=20;
//     var total = a+b;
//     console.log(total);
// }
// sum(); // calling function

// what is the differnece between Function parameter vs Function arguments

/* function expressions */

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }

// var funExp =sum(5,10);

/* Return Keyword */

// function sum(a,b){
//         return total = a+b;
//         }
    
//     var funExp =sum(5,10);
//     console.log(funExp);

    /* Anonymous Function */ 

    
    var funExp = function(a,b){
        return total = a+b;
        }
    
    console.log(funExp(5,10));
