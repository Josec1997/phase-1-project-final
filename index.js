document.addEventListener('DOMContentLoaded',getBoots)

    //get all data of boots JSON
    function getBoots(){
        fetch('http://localhost:3000/boots')
        .then(resp => resp.json())
        .then(bootData => bootData.forEach(bootObj => 
            createBootCard(bootObj)))
        
    function createBootCard(boots) {
        let h3 = document.createElement('h3')
            h3.className = `${boots.name}`
            h3.id = boots.id

        let h4 = document.createElement('h4')
            h4.innerText= boots.name 

        let img = document.createElement('img')
            img.src = boots.image
            img.className = 'boots-avatar'

        let p = document.createElement('p')
            p.innerText = boots.color

        let p2 = document.createElement('p2')
        p2.innerText = boots.price

        //a remove boots button - fetch delete request
        let removeBtn = document.createElement('button')
             removeBtn.className= 'remove-button'
             removeBtn.id = boots.id
             removeBtn.textContent = 'remove'
             removeBtn.addEventListener('click',(e) => {
                deleteBoots(e)
            const deleteCard = document.getElementById(`${boots.id}`)
              deleteCard.remove()
              alert(`${boots.name} Got the Boot!`)
             })
             h3.append(removeBtn)

         let bootCollection = document.querySelector('#boot-collection')
            h3.append(h4,img,p,removeBtn)
             bootCollection.append(h3)
    }

    function deleteBoots(e){ 
        fetch(`http://localhost:3000/boots/${e.target.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
        .then(r => r.json())
        .then(r =>console.log(r))
     }

        let submitBootObj = document.querySelector('form')
            submitBootObj.addEventListener('submit', submitNewBootObj)
          
        function submitNewBootObj(newBootObj) {
            newBootObj.preventDefault()
            let name = newBootObj.target.name.value
            let color = newBootObj.target.color.value
            let img = newBootObj.target.image.value

            fetch(`http://localhost:3000/boots`, {
                method: 'POST' ,
                headers:{
                    'Content-Type': 'application/json',
                    Accept:'application/json' ,
                },
                body:JSON.stringify({
                    name:`${name}`,
                    color:`${color}`,
                    image:`${img}`, 
                })
            })
            .then(r => r.json())
            .then((bootData) => createBootCard(bootData))
        }
    }