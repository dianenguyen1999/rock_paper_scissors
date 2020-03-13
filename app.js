let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let userPic = document.getElementById('userPic');
let compPic = document.getElementById('compPic');
let startBtn = document.getElementById('startBtn');

let comp = 0
let user = 0


function gameLogic() {
  console.log('game started')
  let num = Math.floor(Math.random() * 2)
  console.log(num)
  if (num === 1){
    userPic.src = './images/rock.jpeg'
    user = 1
  } else if (num === 2) {
    userPic.src = './images/paper.jpeg'
    user = 2
  } else if (num === 0) {
    userPic.src = './images/scissors.jpeg'
    user = 0
  } else {
  }
  computerLogic();
};

startBtn.addEventListener('click', gameLogic);

function computerLogic(){
  let num = Math.floor(Math.random() * 2)
  console.log(num)
  if (num === 1){
    compPic.src = './images/rock.jpeg'
    user = 1
  } else if (num === 2) {
    compPic.src = './images/paper.jpeg'
    user = 2
  } else if (num === 0) {
    compPic.src = './images/scissors.jpeg'
    user = 0
  } else {
  }
  
  whoWins();
};

function whoWins() {
  console.log(whoWins)
  if (user === comp ){
    console.log("it is a tie");
  }else if (user === 1 && comp === 2 ){
    console.log('comp wins');
  } else if ( user === 1 && comp === 0){
    console.log('You win');
  } else if (user === 2 && comp === 1){
    console.log('user wins');
  } else if (user === 2 && comp === 0){
    console.log('comp wins');
  } else if (user === 0 && comp === 1){
    console.log('comp win');
  } else if (user === 0 && comp === 2){
    console.log('you win');
  }
}