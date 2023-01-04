'use strict';

/*
01 - Get DOM elements and assign variables
*/

let current = 'X';
let X = 0;
let O = 0;
let popupRef = document.querySelector(".popup");
let msg = document.getElementById("message");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");

/*
02 - Get all buttons as array, filter the array that to return the text is not empty.
If text is not empty length is 0 means, game logic should not execute, because all of the button values are updated. Along with that the selected current button text should be empty because non blank values should not be clicked again. Last condition should be X and O both score should be 0. If all conditions satisfies, should allow to run.

Get all the buttons individually and check the game pattern matches or not. If matches, execute the win function. By clicking the last element, still X or O score is zero means, then it is declared as draw.
*/

function game(e) {  
    let buttons = [...document.getElementsByClassName('button-option')];
    let click = buttons.filter(el => el.innerText == '');

    if(click.length > 0 && e.innerText == '' && X == 0 && O == 0) {
        e.innerText = current;

        let b1 = document.getElementById("b1").innerText;
        let b2 = document.getElementById("b2").innerText;
        let b3 = document.getElementById("b3").innerText;
        let b4 = document.getElementById("b4").innerText;
        let b5 = document.getElementById("b5").innerText;
        let b6 = document.getElementById("b6").innerText;
        let b7 = document.getElementById("b7").innerText;
        let b8 = document.getElementById("b8").innerText;
        let b9 = document.getElementById("b9").innerText;

        if(
            (b1 == current && b2 == current && b3 == current) || 
            (b4 == current && b5 == current && b6 == current) || 
            (b7 == current && b8 == current && b9 == current) ||
            (b1 == current && b5 == current && b9 == current) || 
            (b3 == current && b5 == current && b7 == current) ||
            (b1 == current && b4 == current && b7 == current) ||
            (b2 == current && b5 == current && b8 == current) ||
            (b3 == current && b6 == current && b9 == current)
        ) {
            win();
        }
        
        if(click.length == 1 && X == 0 && O == 0) {
            popupRef.classList.remove("hide");
            msg.innerHTML = `&#x1F60E; <br> It's a Draw`;
        }
        
        current = (current == 'X') ? 'O' : 'X';

    }
}

/*
03 - Function lets to choose winner by assign 1, trigger the popup and prints the winner message
*/

function win() {
    if(current == 'X')
    X = 1;
    else
    O = 1;

    popupRef.classList.remove("hide");
    msg.innerHTML = `${current} wins &#x1F389;`;
}

/*
04 - Reset the X,O to 0 and clears the button text and hide the popup
*/

function resetGame() {
    X = 0;
    O = 0;
    let buttons = [...document.getElementsByClassName('button-option')];
    buttons.map(el => el.innerText = '');
    popupRef.classList.add("hide");
}

newgameBtn.addEventListener("click", () => { resetGame(); });
restartBtn.addEventListener("click", () => { resetGame(); });