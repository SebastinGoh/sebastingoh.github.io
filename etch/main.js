document.body.onload = makeBoardSquares();

function makeBoardSquares() {
    for (let times = 0; times < 16; times++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", times);
        square.addEventListener('mouseover', function handleClick(event) {
            square.style.backgroundColor = 'black';
          });
        document.getElementById("board").appendChild(square);
    }
}