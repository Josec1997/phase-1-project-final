document.addEventListener('DOMContentLoaded',getBoots)

    //get all data of boots JSON
    function getBoots(){
        fetch('http://localhost:3000/boots')
        .then(resp => resp.json())
        .then(bootData => bootData.forEach(bootObj => 
            createBootCard(bootObj)))
        }

    function createBootCard(boots) {
        let div = document.createElement('div')
            div.className = 'card'

        let h3 = document.createElement('h3')
            h3.innerText= boots.name 

        let img = document.createElement('img')
            img.src = boots.image
            img.className = 'boots-avatar'

        let p = document.createElement('p')
            p.innerText = boots.color

        //a remove boots button - fetch delete request
        let removeBtn = document.createElement('button')
             removeBtn.className= 'remove-button'
             removeBtn.id = boots.id
             removeBtn.textContent = 'remove'
             deleteBoots(removeBtn)
             div.append(removeBtn)

         let bootCollection = document.querySelector('.boot-collection')
            div.append(h3,img,p,removeBtn)
             bootCollection.append(div)
    }

    function deleteBoots(){
        addEventListener('click',() => 
        fetch(`http://localhost:3000/boots/${boots.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(boots)
        })
        .then(r => r.json())
        .then(r => console.log(r)) 
     )}

        let submitBootObj = document.querySelector('form')
            submitBootObj.addEventListener('submit', createNewBootObj)
            function createNewBootObj(e) {
                e.preventDefault()
                
            let newBootObj = {
                'name':e.target.name.value,
                'color':e.target.color.value,
                'image':e.target.image.value,
                //delete .value
            }
            submitNewBootObj(newBootObj)
        }

        function submitNewBootObj(newBootObj) {
            fetch(`http://localhost:3000/boots/${boots.id}`, {
                method: 'POST' ,
                headers:{
                    'Content-Type': 'application/json',
                    Accept:'application/json' ,
                },
                body:JSON.stringify(newBootObj)
            })
            .then(r => r.json())
            .then((bootData) => createBootCard(bootData))
        }