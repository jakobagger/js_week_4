//JavaScript Objects

//Create an object with four different properties, with values of your own choice:

let thisGuy = {name: "jakob", age: 38, isEmployed: false, hobbies: ["board games", "programming", "reading", "video games"]};

for(prop in thisGuy){
    console.log(prop,thisGuy[prop]);
  }
  
  delete thisGuy.age;

  for(prop in thisGuy){
    console.log(prop,thisGuy[prop]);
  }

  thisGuy.education = "AP CS student";

  for(prop in thisGuy){
    console.log(prop,thisGuy[prop]);
  }