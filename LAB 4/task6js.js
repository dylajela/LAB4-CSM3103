const bigSquare = document.getElementById("bigSquare") ;
const smallSquare1 = document.getElementById("smallSquare1") ;
const smallSquare2 = document.getElementById("smallSquare2") ;
const startButton = document.getElementById("startButton") ;
const stopButton = document.getElementById("stopButton") ;

let animationId ;
let isAnimating = false ;

//Function to move the squares 
function moveSquares() {
    const bigSquareWidth = bigSquare.offsetWidth ;
    const bigSquareHeight = bigSquare.offsetHeight ;
    const smallSquareSize = smallSquare1.offsetWidth ;

    const maxLeft = bigSquareWidth - smallSquareSize ;
    const maxTop = bigSquareHeight - smallSquareSize ;

    //Generate random place
    const left1 = Math.floor(Math.random() * maxLeft) ;
    const top1 = Math.floor(Math.random() * maxTop) ;
    const left2 = Math.floor(Math.random() * maxLeft) ;
    const top2 = Math.floor(Math.random() * maxTop) ;

    //Move the squares
    smallSquare1.style.left = `${left1}px` ;
    smallSquare1.style.top = `${top1}px` ;
    smallSquare2.style.left = `${left2}px` ;
    smallSquare2.style.top = `${top2}px` ;

    //Repeat the animation
    if (isAnimating) {
        animationId = requestAnimationFrame(moveSquares) ;
    }
}

// Event Listener for start button
startButton.addEventListener("click", function(){
    if (!isAnimating) {
        isAnimating = true ;
        moveSquares() ;
    }
}) ;

//Event Listener for stop button 
stopButton.addEventListener("click", function(){
    if (isAnimating) {
        isAnimating = false ;
        cancelAnimationFrame(animationId) ;
    }
}) ;