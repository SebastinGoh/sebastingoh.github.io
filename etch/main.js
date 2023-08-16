document.body.onload = makeBoardSquares(4);

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
    // 
    let basisNum = 100/num;
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.cssText = `flex-basis: ${basisNum}%`
    });
}

function resetBoard() {
    let num = prompt("How many squares per side?");
    makeBoardSquares(num);
}