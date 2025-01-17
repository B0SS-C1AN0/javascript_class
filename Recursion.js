// Recursion
// It is perfectly okay for a function to call itself, as long as it doesn’t do it so
// often that it overflows the stack. A function that calls itself is called recursive.
// Recursion allows some functions to be written in a different style. Take, for
// example, this alternative implementation of power:
// function power(base, exponent) {
// if (exponent == 0) {
// return 1;
// } else {
// return base * power(base, exponent - 1);
// }
// }
// console.log(power(2, 3));
// // → 8




// We’ve seen that % (the remainder operator) can be used to test whether a
// number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
// another way to define whether a positive whole number is even or odd:
// 55
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The
// function should accept a single parameter (a positive, whole number) and return
// a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
// way to fix this?


function isEven(positive){
     return (true)
}