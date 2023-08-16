document.body.onload = makeBoardSquares(16);

function makeBoardSquares(num) {
    document.getElementById("board").innerHTML = "";
    for (let times = 0; times < num; times++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", times);
        square.addEventListener('mouseover', function handleClick(event) {
            square.style.backgroundColor = 'black';
          });
        document.getElementById("board").appendChild(square);
    }
}

function resetBoard() {
    let num = prompt("How many squares in the board?");
    makeBoardSquares(num);
}