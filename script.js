console.log("Welcome to Tic Tak Toe game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("click.wav");
let gameover = new Audio("game.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = ()=>{
    return turn=== "X"? "0": "X";
}

const checkWin= ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let wins= [
        [0,1,2,2,3,0],
        [3,4,5,2,25,0],
        [6,7,8,2,50,0],
        [0,3,6,-8,25,90],
        [1,4,7,2,25,90],
        [2,5,8,12,25,90],
        [0,4,8,-3,22,45],
        [2,4,6,-3,22,135]
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.Info').innerText = boxText[e[0]].innerText + " Won";
            isGameOver= true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.gameLine').style.width = "25vw";
            document.querySelector('.gameLine').style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`;
            if(((e[0]==0) && (e[1]==4) && (e[2]==8))||((e[0]==2) && (e[1]==4) && (e[2]==6))){
                document.querySelector('.gameLine').style.width = "35vw";
                document.querySelector('.gameLine').style.transform = `translate(${e[3]}vw,${e[4]}vh) rotate(${e[5]}deg)`;
            }
            // music.pause();
            gameover.play();

        }
        }
    )

}

// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText= turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName("Info")[0].innerText = "Turn for " +turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText= "";
    });
    gameover.play();
    turn= "X";
    isGameOver= false;
    document.querySelector('.gameLine').style.width = "0vw";
    document.getElementsByClassName("Info")[0].innerText = "Turn for " +turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})