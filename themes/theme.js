const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
const colourContainer = document.querySelector('.colour-container')

const ranger = document.querySelector('#selectionRange')
ranger.addEventListener('change', e => {
    const totalColour = e.target.value
    colourContainer.innerHTML = ''
    for(let i = 0; i< totalColour; i++){
        const newCol = document.createElement('li')
        newCol.id = `c${i}`
        newCol.style.backgroundColor = '#'+String(randomColor())
        console.log(newCol.style.backgroundColor)
        colourContainer.appendChild(newCol)
    }
})