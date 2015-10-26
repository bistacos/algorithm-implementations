/*
Write a function that given a list of non negative integers, arranges them such
that they form the largest possible number. For example, given [50, 2, 1, 9], 
the largest formed number is 95021.
*/

// best solution, thanks to @svpino for problem and java solutions

var testList = [0, 1, 3, 30, 6, 97, 98, 9];
function largestPosNum(list){
  
  return list.sort(function(a, b){
  	// works by concatenating the two digits to be compared as strings and 
  	// applying the logic of the problem: if one arrangement is 'greater' than 
  	// the other, sort it to the left.  This is an excellent solution since
  	// it deals elegantly with the problem of digits having multiple lengths
  	// (e.g. '980' vs '9').
    return (a+''+b < b+''+a) ? 1 : -1;
  }).join('')/1;
}