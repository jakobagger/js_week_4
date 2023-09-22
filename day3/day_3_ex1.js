const SERVER_URL = "https://jsonplaceholder.typicode.com/users"

document.getElementById("find-user-btn").addEventListener("click", getUserByID)

function getUserByID(){
    const id = document.getElementById("user-id-input").value
    fetch(SERVER_URL+"/"+id)
    .then(res => {if(!res.ok){return alert("Not found")} else {
        return res.json()}
      })
      .then(user => {document.getElementById("single-user").innerText = JSON.stringify(user, null, 3)})
}