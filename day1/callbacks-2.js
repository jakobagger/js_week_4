//1 names

let names = ["anne kathrine", "jakob", "eik", "tulle"];

console.log("All names:")
names.forEach((name) => console.log(name));

console.log("Short names:")
let shortNames = names.filter((name)=>name.length <= 3).forEach((name) => console.log(name));


//2 uppercasing
let upperCaseNames = names.map((name) => name.toUpperCase());
console.log("All names UPPER CASE:")
upperCaseNames.forEach((name) => console.log(name));

//3 HTML tag mapping

htmlString = `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
console.log(htmlString);

//4 cars
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  console.log("new cars:")
  const newCars = cars.filter((car) => car.year > 1999).forEach(car => console.log(car));

  console.log("volvos:")
  
  const volvos = cars.filter(car => car.make == "volvo").forEach(car => console.log(car));

