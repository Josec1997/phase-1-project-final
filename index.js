

// document.addEventListener('DOMContentLoaded', (getBoots()) => {

// })

    //get all data of boots JSON
    function getBoots() {
        fetch('http://localhost:3000/boots')
        .then(resp => resp.json())
        .then (bootData => bootData.forEach (bootObj => {
            createBootCard(bootObj)
        }))
    }

    function createBootCard(bootObj) {
        let div = document.createElement('div')
        div.className = 'card'

        let h3 = document.createElement('h3')
        h3.innerText= bootObj.name 

        let img = document.createElement('img')
        img.src = bootObj.img
        img.className = 'boots-avatar'

        let p = document.createElement('p')
        p.textContent = bootObj.color

        //a remove boots button
        let btn = document.querySelector('button')
        btn.className = 'remove-button'
        btn.id = bootObj.id
        btn.textContent = 'remove'
        btn.addEventListener('click', () => {
            id.remove()
            patchBoots(bootObj)
        })
        div.append(btn)

        let bootCollection = document.querySelector('#boots-collection')
        div.append(h3,img,p,btn)
        bootCollection.append(div)

        
    }

