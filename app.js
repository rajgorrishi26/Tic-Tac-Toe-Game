let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");
let draw = document.querySelector("#draw");



let turn0 = true;
const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetGame = () => {
    turn0 = true;
    anabledboxes();
    msgcontainer.classList.add("hide");
    drawContainer.classList.add("draw-container");
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        count++;

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            box.style.colour="Black";
            // box.disabled= true;
        } else {
            box.innerText = "X"
            turn0 = true;
            // box.disabled= true;
        }
        box.disabled = true;
        checkwinner();
        if (count === 9) {
            console.log("match is draw");
            drawContainer.classList.remove("draw-container");
            draw.innerText = "OH match is Draw !!";
        }
    });
});
const anabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}
const disabledboxes = () => {
    for (let box of boxes) {

        box.disabled = true;
    }
}

const checkwinner = () => {
    for (const patten of winPatterns) {
        // console.log(patten);
        console.log(patten[0], patten[1], patten[2]);
        console.log(boxes[patten[0]].innerText, boxes[patten[1]].innerText, boxes[patten[2]].innerText);
        let pos1 = boxes[patten[0]].innerText;
        let pos2 = boxes[patten[1]].innerText;
        let pos3 = boxes[patten[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos2 != "") {
            if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1) {
                console.log("winner!", pos1);
                showWinner(pos1);
            }
            
        }
    }
}
const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winnner is " + winner;
    msgcontainer.classList.remove("hide");
    drawContainer.classList.add("draw-container");
    disabledboxes();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
