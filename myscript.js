 
console.log("The winner of the game was = " + game());





// ------------------- This gets computer choice --------------------------//

function getComputerChoice()
{
let counter=0;


while(counter===0)
{
numb=Math.round(Math.random()*2);

if(numb===0)
{
    choice="ROCK";
    counter=1;
}
else if(numb===1)
{
    choice="PAPER";
    counter=1;
}
else if (numb===2)
{
    choice="SCISSOR";
    counter=1;
}
}  // while ends

    

alert("computer choice is " + choice );
// this functionreturns rock paper sciccor
return choice;

}

// ------------------------- game play ------------------------------//


function playRound(playerSelection, computerSelection)
{  
   
   let winner=" ";
   
  //-------------------- when player is Rock-----------------// 
  if (playerSelection=="ROCK") 
  {
  if(computerSelection=="ROCK")
  {
    winner="draw";
    console.log(winner);
  }
  if (computerSelection=="ScISSOR")
  {

    winner=" player";
    console.log(winner);
    
  }
  if (computerSelection=="PAPER")
  {
winner="computer";
console.log(winner);


  }
  }
//--------------------when player is paper--------------------//

  if (playerSelection=="PAPER")
  {
   if(computerSelection=="ROCK")
   {
    winner="player";
    console.log(winner);
    
   }
   if(computerSelection=="SCISSOR")
   {
    winner="computer";
    console.log(winner);

   }
   if(computerSelection=="PAPER")
   {
    winner="draw";
    console.log(winner);
   }
}
//---------------when player is SCISSOR---------------------//


if (playerSelection=="SCISSOR")
{
 if(computerSelection=="ROCK")
 {
  winner="computer";
 }
 if(computerSelection=="SCISSOR")
 {
  winner="draw";
 }
 if(computerSelection=="PAPER")
 {
  winner="player";

 }

}

console.log("The computer choice was =" + computerSelection + "And your selction =" + playerSelection);
 return winner;
}

function game()
{
    let playerSelection;
    let computerSelection;
    let computerScore=0;
    let playerScore=0;
    let finalist=" ";
    let value=" ";
    for(let i=0; i<5; i++)
    {   
        playerSelection=prompt("Enter rock paper or scissor?"); 
        playerSelection=playerSelection.toUpperCase();
        computerSelection=getComputerChoice();
        value=playRound(playerSelection, computerSelection);
        if(value==="player")
        {
            playerScore++;
        }
        else if(value==="computer")
        {
            computerScore++;
        }

    }

    if(playerScore>computerScore)
    {

     finalist="Player Wins ";

    }
    else if ( playerScore<computerScore)
    {
    finalist="computer wins";

    }
    else {
        finalist=" game draws";
    }

 return finalist + "score comp =" + computerScore + "score player" + playerScore;
}
