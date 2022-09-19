"use strict";
/*
1. (Conditional statements) Write a program that asks the user’s age. If the age is 1-122 years the
program welcomes the user. If the age is 123-150 years, the program notes that we have a new age
record. If the age is less than 1 or more than 150 years, the program states that the user seems to be
lying. For user interaction you can use those mentioned in javascript.info: alert and prompt. The
latter one can be used as follows: let age = parseInt(prompt("What is your age in years?")); You
may assume that the user inputs an integer
*/


let age = parseInt(prompt("What is your age in years?", ''));

if (age >= 1 && age <= 122){
    alert("Welcome!");
}

else if (age >= 123 && age <= 150){
    alert("This is a new record!");
}
else if(age < 1 || age > 150)
    alert("I think you are fibbing.");

