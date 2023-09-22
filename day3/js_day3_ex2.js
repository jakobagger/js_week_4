const URL = "https://countries.plaul.dk/api/countries";

let currentSelection;
let defaultColor;

document.getElementById("svg2").onclick = (evt) => {
    const country = evt.target
    const isoCode = country.id
    console.log(isoCode)

    if (currentSelection) {
        currentSelection.style.fill = defaultColor
        document.getElementById("info").style.display = "none"
      }
    
      currentSelection = country
      defaultColor = country.style.fill
      country.style.fill = "steelblue"
      
      if (isoCode.length > 2) {
        return
      }

      fetch(`https://countries.plaul.dk/api/countries/${isoCode}`)
    .then(res => {
      if (res.status >= 400) {
        throw `No data found for [${isoCode}`
      }
      return res.json()
    }).then(info => {
        document.getElementById("info").style.display = "block"
        document.getElementById("name").innerText = info.name.common
        document.getElementById("capital").innerText = info.capital
        document.getElementById("flag").setAttribute("src", info.flag)
    })
    .catch(e => console.log(e))

    }

