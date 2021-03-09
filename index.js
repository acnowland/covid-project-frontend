import Select from "./select.js"

const selectElements = document.querySelectorAll('[data-custom]')
selectElements.forEach(selectElement => {
   console.log(new Select(selectElement))
})
const stateOption = document.getElementById('state')

window.addEventListener("scroll", function() {
   const header = document.querySelector(".header")
   header.classList.toggle("sticky", window.scrollY > 0)
})

fetch("https://api.covidtracking.com/v1/states/info.json")
   .then ( response => response.json())
   .then ( iterateOverStates)

function iterateOverStates(states) {
   states.forEach(showState)
}

function showState(state) {
   const stateName = document.createElement("option")
   stateName.value = state
   stateName.textContent = state.name

   stateOption.append(stateName)
}


