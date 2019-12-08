
    
let scores, activePlayer, roundScore, gameOn, previousRoll ,winingScore

init();


document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gameOn){

       
        //random number 
        let dice = Math.floor(Math.random()*6)+1; //pick random number
        
        //display result
        let diceImg = document.querySelector('.dice');
        diceImg.style.display="block"; //show the cube 
        diceImg.src = 'dice-'+dice+'.png';
        
        //compare if player roled 6 two times 
        if( previousRoll=== 6 && dice === 6){
            roundScore = 0;
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]
            nextPlayer()
        }
        previousRoll=dice;

       //update the score if  number is not 0 
        if (dice !== 1){
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        
        }else {//next player
            diceImg='dice-1.png'
            nextPlayer();
        }
    } 

})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameOn){

        previousRoll=0;
        //add curent score to global score
        scores[activePlayer]+=roundScore;
        //update user interface 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // check if player won the game 
        if (scores[activePlayer]>=winingScore){
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
        previousRoll=0;
        roundScore = 0;
       
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display="none";
};

function init(){

    //set wining score

   
    gameOn = true
    //clear scores
    scores =[0,0];
    //reset player 
    activePlayer = 0;
    //set score to 0
    roundScore=0;
    //hide dice img
    previousRoll = 0;
    
    winingScore = 100; 
   
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
function setScore(){

    winingScore = parseInt(window.prompt('Enter your wining score:'));
    
};
 
function hideBtn(){

    document.querySelector('.btn-roll').style.display="none";
    document.querySelector('.btn-hold').style.display="none";

};
function showBtn(){

    document.querySelector('.btn-roll').style.display="block";
    document.querySelector('.btn-hold').style.display="block";

};


//document.querySelector('#current-'+ activePlayer).textContent= dice;
// document.querySelector('#curent-'+ activeplayer).innerHTML="<em>"+dice+"</em>"