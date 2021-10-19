let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var btn = document.createElement('button');
btn.innerText = "Press to Begain!"
document.getElementById('game-over-lbl').appendChild(btn);
btn.addEventListener('click', (startingEvent) => {startingEvent.target.hidden = true});
// use the value stored in the nextPlayer variable to indicate who the next player is

let p1 = 'O';
let p2 = 'X';
let nextLabel = document.getElementById('next-lbl');
// nextLabel.innerText = nextPlayer


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(i = 0; i < 9; i++) {
        let box = 'c' + (i+1);
        var botten = document.createElement('button');
        botten.className = 'button';
        document.getElementById(box).appendChild(botten);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}
let counter = 0;
// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
        let click = event.target;
        click.innerText = nextPlayer;
        click.disabled = true;
        if (nextPlayer == p2){
            nextPlayer = p1;
        }else if (nextPlayer == p1){
            nextPlayer = p2;
        }
        nextLabel.innerText = nextPlayer;
        counter++;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let endGame = document.getElementById('game-over-lbl');
        
        let end = document.createElement('h3');
        end.innerText = "Game Over!";

        endGame.appendChild(end);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clickin = true;

    for(i = 0; i <= 9; i++) {
        if (!btns[i].disabled) {
            clickin = false;
        }
    }
    return clickin;
    
}
