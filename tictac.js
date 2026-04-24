let btns=document.querySelectorAll(".gameButtons");
let resetBtn=document.querySelector("#resetButton");
let newBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#message");
let turn0=true;
const winningPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]
];

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    if(turn0){
        btn.innerText="X";
        turn0=false;
    }
    else{
        btn.innerText="O";
        turn0=true;
    }
        btn.disabled=true;
        checkWinner();
    });
});
const resetGame=()=>{
    turn0=true;
    enableBtn();
}

const showWinner=(winner)=>{
    msg.innerText="contragulation winner is "+winner;
    msgContainer.classList.remove("hide");
    disableBtn();
}
let checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos0=btns[pattern[0]].innerText;
        let pos1=btns[pattern[1]].innerText;
        let pos2=btns[pattern[2]].innerText;
        if(pos0!=""&&pos1!=""&&pos2!="")
        {
            if(pos0===pos1&&pos1===pos2)
            {
                
                showWinner(pos0);
                
            }
        }
        
        
    }
}
const disableBtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
        msgContainer.classList.remove("hide");
    }
}
const enableBtn=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
        msgContainer.classList.add("hide");
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);