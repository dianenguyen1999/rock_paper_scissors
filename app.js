let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let userPic = document.getElementById('userPic');
let compPic = document.getElementById('compPic');
let startBtn = document.getElementById('startBtn');
let userScore = document.getElementById('userScore')
let compScore = document.getElementById('compScore')

let user_total = 0
let comp_total = 0

startBtn.addEventListener('click', computerLogic);
rockBtn.addEventListener('click', rockChoice);
paperBtn.addEventListener('click', paperChoice);
scissorsBtn.addEventListener('click', scissorsChoice);


let { user, comp } = newFunction();



function newFunction() {
  let comp = 0;
  let user = 0;
  return { user, comp };
}

function rockChoice(){
  userPic.src = './images/rock.jpeg'
  user = 'rock'
}

function scissorsChoice (){
  userPic.src = './images/scissors.jpeg'
  user = 'scissors'
}

function paperChoice(){
  userPic.src = './images/paper.jpeg'
  user = 'paper'
}




function computerLogic(){
  let num = Math.floor(Math.random() * 2)
  console.log(num)
  if (num === 1){
    compPic.src = './images/rock.jpeg'
    comp = 'rock'
  } else if (num === 2) {
    compPic.src = './images/paper.jpeg'
    comp = 'paper'
  } else if (num === 0) {
    compPic.src = './images/scissors.jpeg'
    comp = 'scissors'
  } else {
  }
  
  whoWins();
};

function whoWins() {
  console.log(whoWins)
  if (user === comp ){
    console.log("it is a tie");
    tie()
  }else if (user === 'rock' && comp === 'paper' ){
    console.log('comp wins');
    comp_total += 1
    loser()
  } else if ( user === 'rock' && comp === 'scissors'){
    console.log('You win');
    user_total += 1
    winner()
  } else if (user === 'paper' && comp === 'rock'){
    console.log('user wins');
    user_total += 1
    winner()
  } else if (user === 'paper' && comp === 'scissors'){
    console.log('comp wins');
    comp_total += 1
    localStorage()
  } else if (user === 'scissors' && comp === 'rock'){
    console.log('comp win');
    comp_total += 1
    loser()
  } else if (user === 'scissors' && comp === 'paper'){
    console.log('you win');
    user_total += 1
    winner()
  }
  setTotals()
}

// let user_total = newFunction();

// function newFunction() {
//   let user_total = 0;
//   let comp_total = 0;
//   return user_total;
// }

function winner() {
  alert('You won! You worked hard for this one!')
}

function loser() {
  alert('Man that was a close one but you still lost.')
}

function tie(){
  alert("It's a tie!")
}



function setTotals(){
  compScore.innerHTML = comp_total
  userScore.innerHTML = user_total
}


