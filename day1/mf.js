//my functions

let names = ["anne kathrine", "jakob", "eik", "tulle"];


//a FILTER
function myFilter(array, callback) {
    const filteredArray = [];
  
    array.forEach((element) => { //forEach() accepts up to three arguments, but as far as I can see I only need the element, don't need to know the index or the rest of the array within the callback
      if (callback(element)) {
        filteredArray.push(element); //push adds to the end of the array (cf. .add() in Java)
      }
    });
  
    return filteredArray;
  }
  
  console.log("All names:")
names.forEach((name) => console.log(name));

console.log("Short names:")
let shortNames = myFilter(names, (name)=>name.length <= 3).forEach((name) => console.log(name)); //passing names as argument since myFilter() isn't a built in array method so this is how we can tell it what array to work on instead

/*If we wanted to be very literal with getting myFilter to work *exactly* like the built in filter() method as stated in the exercise I supppose it should be able to be called directly on the array, which can be done by extending Array.prototype. Not a great idea according to ChatGPT who showed me how to do it but something like:

Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
  
    return filteredArray;
  };

  console.log("short names again");
  let fancyShortNames = names.myFilter((name)=>name.length <= 3).forEach((name) => console.log(name));
  */

  //b MAP

  function myMap(array, callback){
    newArr = [];

    array.forEach((element) => {
        newArr.push(callback(element));
    });

    return newArr;
  }

  console.log("My capitalized names:")
  const capNames = myMap(names, (name) => name.toUpperCase()).forEach((name) => console.log(name));
  

 