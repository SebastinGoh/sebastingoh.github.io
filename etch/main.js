document.body.onload = makeBoardSquares(4);git

function makeBoardSquares(num) {
    document.getElementById("board").innerHTML = "";
    
    for (let times = 0; times < num**2; times++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", times);
        square.addEventListener('mouseover', function handleClick(event) {
            square.style.backgroundColor = 'black';
          });
        document.getElementById("board").appendChild(square);
    }
    
    // in order to determine flex-basis of each square
    // 100% divide by number of squares per side
    let basisNum = 100/num;

    // change the flex-basis value for all squares
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.cssText = `flex-basis: ${basisNum}%`
    })
}

function resetBoard() {
    let num = prompt("How many squares per side?");
    makeBoardSquares(num);
}