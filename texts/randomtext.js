const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


const texts = document.querySelector('.scribles')

const original = texts.textContent
console.log(original.length)

texts.addEventListener('click', e => {
    let length = original.length
    let timesRun = 0
    const timer = setInterval(() => {
        timesRun += 1
        if(timesRun%30 === 0){
            length-=1
        }
        let currentText = `${original.slice(0, original.length - length)}${generateString(length)}`
        e.target.textContent = currentText.trim();
        if(length === 0){
            clearInterval(timer)
            console.log('stopped')
        }
    }, 20)

    
})
