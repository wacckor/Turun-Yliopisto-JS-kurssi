"use strict";
/*
3. (Loops and functions) Write a function that computes and returns the sum of all integers in the
range [lower, upper] that are divisible by d1 or d2 (or both). Lower, upper, d1 and d2 are parameters
of the function; you should not assume that they have any fixed values. Performance does not
matter (the problem can be solved without a loop but it requires a bit more thinking). This exercise
is a modified version of the following: https://projecteuler.net/problem=1
*/

function sumOfDivisible(lower,upper,d1,d2){
    let sum = 0;
    for(let i = Number(lower); i < Number(upper); i++){
        if(i % Number(d1) == 0 || i % Number(d2) == 0){
           // alert(i);
            sum += i;
        }
    }
    return sum;
}

let lower = prompt("Give me a number please!", '');
let upper = prompt("Give me please an upper number!", '');
let d1 = prompt("Give me please the first divisor!", '');
let d2 = prompt("And give me please the second divisor!", '');
alert("The sum of the divisible numbers by the given ones in the given interval is " + sumOfDivisible(lower,upper,d1,d2) + ".");