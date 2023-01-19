

// document.addEventListener('DOMContentLoaded', () => {


    //get all data of boots JSON
    fetch('http://localhost:3000/boots')
        .then(resp => resp.json())
        .then (bootData => bootData.forEach (bootObj => {
            createBootCard(bootObj)
        }))



