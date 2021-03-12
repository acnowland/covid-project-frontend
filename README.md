# README

# FRONTEND FOR COVID-TRACKER
=============

# SOLUTION FOR TRACKING THE CURRENT STATUS OF COVID IN YOUR STATE


### Table of Contents
* General Info
* Technologies
* Setup
* Use
* Code Examples
* Features
* To-Do


This is the current frontend for the Covid Tracker for our Mod2 Project. With this frontend you have access to all the current information (per state) on covid. You will be able to easily find out the total number of cases as well as track the severity based on number of hospital admissions. 



**_Technologies_**
* Ruby on Rails for Backend (look to "https://github.com/acnowland/Covid-project-backend" for current backend)
* HTML/CSS/JS Frontend
* Leaflet.js for Map
* "https://api.covidtracking.com"
* "https://covid-api.mmediagroup.fr/v1/cases?country=US"

**Setup**

* First and foremost, you will want to have accessed our backend from the link above. Clone down and setup per instructions there.
* Clone the frontend to make available locally. 
* Once backend server is running, run lite-server to start front end access. 

**Use**

Using the web app is very straightforward, as it is designed to be an endpoint for a normal person to have access to critical information. Once you access the main page, there will be a button to click which will expand to show you a list of all states. Feel free to scroll through the list or you can use the search action to filter the list. Once you click on the state, you will be brought to that states information page. On this page you will have access to see the total number of cases, the number of tests conducted, and positive tests.  This is great information to trend to see how your current state is progressing with COVID care. Secondly, you will also have access to a map. The map will spawn either a red,yellow, or green circle over your state relaying the severity of the number of hospitilizations. (Red = worst --> yellow --> green). There is also access by clicking on the circle to see the number of current hospitilizations and the number of cases positive compared to the day prior. 


**_Code Examples_**
```
window.addEventListener("scroll", function() {
   header.classList.toggle("sticky", window.scrollY > 0)
})
```
This feature will allow the main picture to shrink to a more appropriate size immeidately upon scrolling upon load in. 

```
function filterFunction(){
   let input = document.querySelector('#searchBar')
   let filter = input.value.toUpperCase();
   let div = document.querySelector('.list')
   let a = div.getElementsByClassName("state-name")
   for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

```

Implementation of a search filter function that will be enacted on a key stroke up. 

```
function abbrToState(abbr){
   abbr = abbr.toUpperCase();
   for(var i = 0; i<states.length; i++){
       if(states[i][1] == abbr){
           return(states[i][0])
       }
   }
}
```

As our API only returns an abbreviation for our state we had to implement a way to turn that abbreviation to a full state name. We reference an array with a states full name and abbreviation and then if the abbreviation matches the input from our api it will then allow us to display the full state name. 






