const circle = document.querySelector('.circle')

const body = document.querySelector('body')

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

let total = 0

body.addEventListener('click', e =>{
    const newCircle = document.createElement('div')
    total+= 1
    newCircle.classList.add('circle')
    newCircle.id = `c${total}`
    newCircle.style.backgroundColor = randomColor()
    newCircle.style.outline = `1px solid ${randomColor()}`
    body.appendChild(newCircle)
    setTimeout(() => newCircle.classList.toggle('active'),500)
    console.log(body.childElementCount)
    if(body.childElementCount>100){
        body.removeChild(body.firstChild)
    }
    // setTimeout(() => newCircle.classList.toggle('active'),5000)

})

circle.addEventListener('click', e => {
    e.target.classList.toggle('active')



    }, { once: true })