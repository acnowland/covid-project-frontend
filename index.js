const testStates = document.querySelector('.test-states')
const stateOption = document.getElementById('state')
const allOptions = document.getElementsByClassName('state-name')
const header = document.querySelector(".header")
const navigation = document.querySelector('.navigation');
const searchBar = document.getElementById('searchBar')
const ul = document.querySelector('li')

console.log(ul)



window.addEventListener("scroll", function() {
   header.classList.toggle("sticky", window.scrollY > 0)
})

fetch("http://localhost:3000/covids")
   .then ( response => response.json())
   .then ( iterateOverStates)

function iterateOverStates(states) {
   states.forEach(showState)
}

function showState(state) {
   const stateName = document.createElement("li")
   const toFull = state.state

   stateName.innerText = abbrToState(toFull)
   stateName.innerHTML = `<a href="stateshow.html?id=${state.state}">${abbrToState(toFull)}</a>`
   stateName.classList.add('state-name')

   stateOption.append(stateName)  
}

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

function abbrToState(abbr){
   abbr = abbr.toUpperCase();
   for(var i = 0; i<states.length; i++){
       if(states[i][1] == abbr){
           return(states[i][0])
       }
   }
}

document.querySelector('.toggle').onclick = function () {
   navigation.classList.toggle('active');
}

var merged = [].concat.apply([], states)
let arrs = [[], []];
for (let i = 0; i < merged.length; i++)
   arrs[i % 2].push(merged[i]);
let [ar, b] = arrs;

// console.log(ar);

// searchBar.addEventListener('keyup', (e) => {
//    const searchedString = e.target.value.toLowerCase();

//    const filteredStates = ar.filter((state) => {
//       return (
//          console.log(state)
//       )
//    })


// })



