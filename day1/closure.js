//1) Implement and test the Closure Counter Example from the Slides

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  counter1.increment();
  counter2.decrement();
  console.log(counter1.value());
  console.log(counter2.value());

  //2 Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age)


let makePerson = function(){
    let age;
    let name;

    return {
        setName: function(newName) {
            name = newName;
          },
      
          setAge: function(newAge) {
            age = newAge;
          },

          getInfo: function(){
            return name+", "+age;
          }
      }
}

let newGuy = makePerson();
newGuy.setAge(0);
newGuy.setName("Eik");

let oldGuy = makePerson();
oldGuy.setAge(38);
oldGuy.setName("Jakob");

console.log(oldGuy.getInfo());
console.log(newGuy.getInfo());
