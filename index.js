

document.addEventListener('DOMContentLoaded', (getBoots) => {
    
})

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

        //a remove boots button - fetch delete request
        let btn = document.querySelector('button')
             btn.className = 'remove-button'
             btn.id = bootObj.id
            btn.textContent = 'remove'
             btn.addEventListener(
                fetch(' http://localhost:3000/boots'+ id, {
                    method: 'DELETE'
                })
                .then(r => r.json())
                .then(r => console.log(r)) ,

            patchBootObj(bootObj)
        )
        div.append(btn)


        let bootCollection = document.querySelector('#boots-collection')
            div.append(h3,img,p,btn)
             bootCollection.append(div)
    }

        let submitBoots = document.querySelector('form')
            submitBoots.addEventListener('submit', createNewBootObj)
            function createNewBootObj(e) {
            let newBootObj = {
                'name' : e.target.name.value ,
                'color' : e.target.color.value ,
                'image' : e.target.image.value ,

            }
            submitNewBootObj(newBootObj)
        }

        function submitNewBootObj(newBootObj) {
            fetch('http://localhost:3000/boots', {
                method: 'POST' ,
                headers: {
                    'Content-Type': 'application/json',
                    Accept:'application/json' ,
                },
                body:JSON.stringify(newBootObj)
            })
            .then(r => r.json())
            .then((bootData) => createBootCard(bootData))
        }

        function patchBootObj(bootObj) {
            fetch(`http://localhost:3000/boots${bootObj.id}`, {
                method: 'PATCH' ,
                headers: {
                    'Content-type': 'application/json' ,
                    Accept:'appliction/json' ,
                },
                body:JSON.stringify(bootObj)
            })
            console.log(patchBootObj)
        }

