/*
 * If you've never used logical operators before
 * (such as `and` `or` `not` etc.)
 * then you should read:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 *
 */

/*
 * export a function named `both` which tests whether both of two variables is truthy.
 */

 export function both(a, b) {
   if (a && b) {
     return true;
   }
 }

/*
 * export a function named `either` which tests whether either of two variables is truthy.
 */

 export function either(a, b) {
   if (a || b) {
     return true;
   }
 }

/*
 * export a function named `negative` which tests whether a variable is `false`.
 */

 export function negative(a) {
   if (!a) {
     return true;
   }
  //  return !a;
 }
 // no "if" needed here

/*
 * export a function named `positive` which tests whether a variable is `true`.
 */

 export function positive(a) {
   return a;
 }

/*
 * export a function named `all` which tests whether all of three variables are truthy.
 */

 export function all(a, b, c) {
   return (a && b && c);
 }

/*
 * export a function named `none` which tests whether all of three variables is falsey
 */

export function none(a, b, c) {
  return !(a && b && c);
}

/*
 * export a function named `any` which tests whether any of three variables is truthy
 */

 export function any(a, b, c) {
   return (a || b || c);
 }

/*
 * export a function named `isTrue` that returns whether a variable is `true`
 */

 export function isTrue(a) {
   return (a === true);
 }

/*
 * export a function named `isTruthy` that returns whether a variable is `truthy`
 */

 export function isTrue(a) {
   return (a == true);
 }
