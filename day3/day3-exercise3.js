const SERVER_URL = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getACar)
document.getElementById("add-car-btn").addEventListener("click", addCar)

function getAllCars(){
  fetch(SERVER_URL)
    .then(res => res.json())
    .then(cars => {
      const tableRows = cars.map(car => `
      <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
      </tr>
      `)
      const rowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = rowsAsString; //XSS-vulnerable beware teh haX0rz
    })
}

function getACar(){
  const id = document.getElementById("text-for-id").value;
  fetch(SERVER_URL+"/"+id)
  .then(res => {if(!res.ok){return alert("Not found")} else {
    return res.json();}
  }).then( car => {
    document.getElementById("found-car").innerText = JSON.stringify(car, null, 2);
  })
}

function addCar(){
const form = document.getElementById('carForm');
  const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value),
  };
  console.log(newCar);

  const options = {
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(newCar)
  }
  fetch(SERVER_URL, options)
  .then(res => res.json())
  .then(carResponse => document.getElementById("new-car-response").innerText = JSON.stringify(carResponse, null, 3)
)}


fetch(SERVER_URL)
  .then(res => res.json()) //for this exercise, just do this
  .then(data => {
   // Inside this callback, AND ONLY HERE the response data is available
   console.log("data", data);
  /* data now contains the response, converted to JavaScript
     Observe the output from the log-output above
     Now, just build your DOM changes using the data inside this block*/       
});
