

const queryParams = new URLSearchParams(window.location.search)
const stateName = queryParams.get('id')

const pageTitle = document.querySelector('.hero')
const stateCard = document.querySelector('.state-card')


//adds map functionality
// const mymap = L.map('mapid').setView([39.75, -104.99], 4.2);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiYWNub3dsYW5kIiwiYSI6ImNrbTJqaGhsZTBoYjcycGp2ZHoxNWlibncifQ.lAf9JwvZdGux5Cg6T_EFRg'
// }).addTo(mymap);




fetch(`http://localhost:3000/covids/${stateName}`)
    .then(response => response.json())
    .then(state => {
        const stateName = document.createElement('h2')
        const toFullName = state.state

        
        const positive = document.createElement('h4')
        positive.textContent = `Current number of positive cases are:  ${state.positive}`

        const totalTests = document.createElement('h4')
        totalTests.textContent = `To date, there has been ${state.totalTestResults} total tests peformed.`

        const deaths = document.createElement('h4')
        deaths.textContent = `The total number of deaths is currently at ${state.death}.`

        //will turn abbr to full state name and place on hero
        pageTitle.append(abbrToState(toFullName))
        //appends to the state card
        stateCard.append(positive,totalTests,deaths)

    })










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
        ['Mariana Islands', 'MP'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
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