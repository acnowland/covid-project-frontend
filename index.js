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

fetch("http://localhost:3000/covids")
   .then ( response => response.json())
   .then ( iterateOverStates)

function iterateOverStates(states) {
   states.forEach(showState)
}

function showState(state) {
   const stateName = document.createElement("option")
   const toFull = state.state

   stateName.value = state.state
   stateName.textContent = abbrToState(toFull)

   stateOption.append(stateName)  
}




function abbrToState(abbr){
   var states = [
       ['Alabama', 'AL'],
       ['Alaska', 'AK'],
       ['American Samoa', 'AS'],
       ['Arizona', 'AZ'],
       ['Arkansas', 'AR'],
       ['Armed Forces Americas', 'AA'],
       ['Armed Forces Europe', 'AE'],
       ['Armed Forces Pacific', 'AP'],
       ['California', 'CA'],
       ['Colorado', 'CO'],
       ['Connecticut', 'CT'],
       ['Delaware', 'DE'],
       ['District Of Columbia', 'DC'],
       ['Florida', 'FL'],
       ['Georgia', 'GA'],
       ['Guam', 'GU'],
       ['Hawaii', 'HI'],
       ['Idaho', 'ID'],
       ['Illinois', 'IL'],
       ['Indiana', 'IN'],
       ['Iowa', 'IA'],
       ['Kansas', 'KS'],
       ['Kentucky', 'KY'],
       ['Louisiana', 'LA'],
       ['Maine', 'ME'],
       ['Marshall Islands', 'MH'],
       ['Maryland', 'MD'],
       ['Massachusetts', 'MA'],
       ['Mariana Islands', 'MP'],
       ['Michigan', 'MI'],
       ['Minnesota', 'MN'],
       ['Mississippi', 'MS'],
       ['Missouri', 'MO'],
       ['Montana', 'MT'],
       ['Nebraska', 'NE'],
       ['Nevada', 'NV'],
       ['New Hampshire', 'NH'],
       ['New Jersey', 'NJ'],
       ['New Mexico', 'NM'],
       ['New York', 'NY'],
       ['North Carolina', 'NC'],
       ['North Dakota', 'ND'],
       ['Northern Mariana Islands', 'NP'],
       ['Ohio', 'OH'],
       ['Oklahoma', 'OK'],
       ['Oregon', 'OR'],
       ['Pennsylvania', 'PA'],
       ['Puerto Rico', 'PR'],
       ['Rhode Island', 'RI'],
       ['South Carolina', 'SC'],
       ['South Dakota', 'SD'],
       ['Tennessee', 'TN'],
       ['Texas', 'TX'],
       ['US Virgin Islands', 'VI'],
       ['Utah', 'UT'],
       ['Vermont', 'VT'],
       ['Virginia', 'VA'],
       ['Washington', 'WA'],
       ['West Virginia', 'WV'],
       ['Wisconsin', 'WI'],
       ['Wyoming', 'WY']
   ];

   abbr = abbr.toUpperCase();
   for(var i = 0; i<states.length; i++){
       if(states[i][1] == abbr){
           return(states[i][0])
       }
   }
}


