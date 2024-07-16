let myScore=document.querySelector("#myScore");
let comScore=document.querySelector("#comScore")
const choices=document.querySelectorAll(".choice");
let result=document.querySelector("#message");
const userScoreP=document.querySelector("#myScore");
const compScoreP=document.querySelector("#comScore");

let userScore=0;
let compScore=0;
const compChoice=()=>{
    const options=["rock","paper","scissors"];
    let c=Math.floor(Math.random()*3);
    return options[c];

}

const drawGame=()=>{
    console.log("game was draw");
    result.innerText="Game was draw";
    result.style.backgroundColor="#081b31"; 
}

const vertict=(userWin,userChoice,compC)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        console.log("you win");
        result.innerText=`You win! ${userChoice} beats ${compC}`;
        result.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScoreP.innerText=compScore;
        console.log("computer win");
        result.innerText=`You Lose! ${compC} beats ${userChoice}`;
        result.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compC=compChoice();
    console.log("conputer choice =",compC);

    if(userChoice===compC){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compC==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compC==="scissors"?false:true;
        }
        else{
            userWin=compC==="rock"?false:true;
        }
        vertict(userWin,userChoice,compC);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");      
        playGame(choiceId);
    })
})