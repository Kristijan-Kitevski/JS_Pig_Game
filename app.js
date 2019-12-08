/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
    
let scores, activePlayer, roundScore, gameOn 

init();

document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gameOn){
        //random number 
        let dice = Math.floor(Math.random()*6)+1; //pick random number
        //display result
        let diceImg = document.querySelector('.dice');
        diceImg.style.display="block"; //show the cube 
        diceImg.src = 'dice-'+dice+'.png';
    
       //update the score if  number is not 0 
        if (dice !== 1){
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        
        }else {//next player
            nextPlayer();
        }
    } 

})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameOn){
        //add curent score to global score
        scores[activePlayer]+=roundScore;
    
        //update user interface 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // check if player won the game 
        if (scores[activePlayer]>=100){
           document.querySelector('#name-' + activePlayer).textContent="Winner!";
           document.querySelector('.dice').style.display="none";
           hideBtn();
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           gameOn=false;
    
        } else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click' , init);




/*************************************************************************************************
 FUNCTIONS
 **************************************************************************************************/



 
function nextPlayer(){
    activePlayer===0 ?activePlayer=1:activePlayer=0;
        
        roundScore = 0;
       
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display="none";
};

function init(){
    gameOn = true
    //clear scores
    scores =[0,0];
    //reset player 
    activePlayer = 0;
    //set score to 0
    roundScore=0;
    //hide dice img
    document.querySelector('.dice').style.display="none";

    //set all the values to 0
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('name-0').textContent="Player 1";
    document.getElementById('name-1').textContent="Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    showBtn();

};
 
function hideBtn(){

    document.querySelector('.btn-roll').style.display="none";
    document.querySelector('.btn-hold').style.display="none";
}
function showBtn(){

    document.querySelector('.btn-roll').style.display="block";
    document.querySelector('.btn-hold').style.display="block";

}


//document.querySelector('#current-'+ activePlayer).textContent= dice;
// document.querySelector('#curent-'+ activeplayer).innerHTML="<em>"+dice+"</em>"