let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector("main");
let heading = document.querySelector("h1");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const newGame = () => {
    // main.classList.remove("hide");
    heading.classList.remove("hide");
    resetBtn.classList.remove("hide");
    msgContainer.classList.add("hide");
    enableBoxes();
    turnO = true;
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true; 

       checkWinner();
    });
});

const showWinner = (winner) => {
    // main.classList.add("hide");
    heading.classList.add("hide");
    resetBtn.classList.add("hide");
    msg.innerText = `Congratulations, ${winner} win the game`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            // console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
    }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);