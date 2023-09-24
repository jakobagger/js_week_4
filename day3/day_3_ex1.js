const SERVER_URL = "https://jsonplaceholder.typicode.com/users"

document.getElementById("find-user-btn").addEventListener("click", getUserByID)

document.getElementById("get-all-users-btn").addEventListener("click", getAllUsers)

function getUserByID(){
    const id = document.getElementById("user-id-input").value
    fetch(SERVER_URL+"/"+id)
    .then(res => {if(!res.ok){return alert("User not found")} else {
        return res.json()}
      })
      .then(user => {
        document.getElementById("single-user").innerText = JSON.stringify(user, null, 3)
        document.getElementById("single-user").style.display = "block"
        document.getElementById("users-table").style.display = "none"
      })
      .catch(e => console.log(e))
}

function getAllUsers(){
  fetch(SERVER_URL)
  .then(res => {if(!res.ok){return alert("Could not get users")} else {
    return res.json()}
  })
  .then(users => {
    const userTable = users.map(user => 
    `<tr>
      <td>${user.name}</td>
      <td>${user.phone}</td>
    </tr>`).join('')
    console.log(userTable)
    document.getElementById("user-table-body").innerHTML = userTable
    document.getElementById("users-table").style.display = "block"
    document.getElementById("single-user").style.display = "none"
  }).catch(e => console.log(e))
}