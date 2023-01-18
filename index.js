const addBoot = false 

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('#new-boots-btn')
    const bootsContainer = document.getElementsByClassName('boots-container')

    //tucks form away untill clicked
    addBtn.addEventListener('click', () => {
        addBoot= !addBoot
        if (addBoot) {
            bootsContainer.style.display = 'block'
        } else {
            bootsContainer.style.display = 'none'
            }
        }
    )
})


    //get all data of boots 
    fetch('')