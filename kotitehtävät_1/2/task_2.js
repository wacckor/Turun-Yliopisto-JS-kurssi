"use strict";
/*
2. (Loops) It is a common practice to avoid using decimal numbers as loop counters because
rounding errors can have surprising effects. In this exercise we see one example of that. The task
here is to simply count the sum 0 + 0.1 + 0.2 + … + 0.9. It has been implemented as follows:
let sum = 0;
for(let i = 0; i != 1; i += 0.1) {sum += i;}
alert(sum);
The rationale is that after adding 0.1 ten times, the result should be 1, and the loop should end.
However, when the program is executed, it appears to never end. Fix the program so that an infinite
loop is avoided and it gives the correct result.
Note: it is possible to compute the sum without a loop using well-known formulas. But that is not
the point here, so please solve the problem using a loop.
*/

let sum = 0;
for(let i = 0; i <= 0.9; i += 0.1) {sum += i;}
alert(sum);
