function setup() {
    createCanvas(500,500);
}

function randomSize() {
    return Math.floor(Math.random()*100)
}

function randomColor() {
    return Math.floor(Math.random()*255)
}

function draw() {
    if(mouseIsPressed){
        fill(randomColor(),randomColor(),randomColor());
    }   else{
        fill(255);
    }
    ellipse(mouseX, mouseY, randomSize(), randomSize());

}