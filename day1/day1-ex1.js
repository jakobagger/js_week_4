
function add(n1, n2){
    return n1 +n2;
 }

 const sub = function(n1,n2){
    return n1 - n2
  } 

  const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };

console.log( add(1,2) )     // prints the return of the add function ie 1+2, ie 3

console.log( add )          // Prints [Function: add] because we're not calling the function, add without () is just a reference.

console.log( add(1,2,3) ) ; // Prints 3 because it only takes in the first two arguments and just ignores the third one (because add is defined to only take 2)

console.log( add(1) );	  // Prints NaN, not a number, because it only receives one number argument instead of the two it expects and the second is thus undefined (not null!)  	

console.log( cb(3,3,add) ); // "Result from the two numbers: 6", takes in a reference to the add function as argument and calls the add function inside itself with the two number arguments and returns a string of the result.

console.log( cb(4,3,sub) ); // "Result from the two numbers: 4+3=1" because it calls the sub() function instead. Looks weird because the string is hardcoded to make sense for the add function but the cb function actually works with any nyumber of functions manipulating two numbers.

console.log(cb(3,3,add())); // Prints "TypeError: callback is not a function" because we're calling the cuntion in the arguemnt instead of passing a reference to the function (ie without ())

console.log(cb(3,"hh",add));// Prints "Result from the two numbers: 3+hh=3hh" where it concatenates instead of adding ie 3 is type coerced into a string

function mul(n1, n2){
    return n1 * n2
  };