/* Problem
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

function maps(arr) {

    return arr.map((elem)=>elem * 2);

}
  
//Tests
console.log(maps([1, 2, 3]), [2, 4, 6]);