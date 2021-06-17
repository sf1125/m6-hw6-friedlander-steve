// Change all box colors on mouseover

var boxes = document.getElementsByClassName('square');
var box1 = boxes[0];
var box2 = boxes[1];
var box3 = boxes[2];

function changeColor() {
  for (i=0; i<boxes.length; i++){
    boxes[i].classList.toggle('redcolor');
  }
}
for (i=0; i<boxes.length; i++) {
  boxes[i].addEventListener('mouseenter', changeColor) 
  boxes[i].addEventListener('mouseleave', changeColor) 
}


//Shows hidden button

var button = document.getElementsByClassName('start_over')[0];

function showButton () {
  button.classList.remove('hidden');
}

box1.addEventListener('click', showButton);
box2.addEventListener('click', showButton);
box3.addEventListener('click', showButton);

// Box 1 - Close, but no cigar message

var message = document.getElementsByClassName('message')[0];
function box1Message () {
  message.innerHTML='Oooh - so close, but no cigar';
}

box1.addEventListener('click', box1Message);


// Box 2 - DING DING DING - We have a winner message

var message = document.getElementsByClassName('message')[0];
function box2Message () {
  message.innerHTML='DING DING DING - We have a winner';
}

box2.addEventListener('click', box2Message);


// Box 3 - Oops, butter luck next time message

var message = document.getElementsByClassName('message')[0];
function box3Message () {
  message.innerHTML='Oops, butter luck next time';
}

box3.addEventListener('click', box3Message);



// function colorChange(){
//     boxes.style.color = '#FF0000';
// };

// for (i=0; i<boxes.length; i++) {
//     boxes[i].addEventListener('mouseenter', colorChange);
// }

// Box 1 - Close, but no cigar message

// var myElement1 = document.createTextNode('onclick',
// function(event) {
//   var message1 = document.getElementByClassName('box1');
//   message1.innerText = 'Oooh - so close, but no cigar';
//   },
// );

// // Box 2 - DING DING DING - We have a winner message

// var myElement2 = document.createTextNode('onclick',
// function(event) {
//   var message2 = document.getElementByClassName('box2');
//   message1.innerText = 'DING DING DING - We have a winner';
//   },
// );

// // Box 3 - Oops, butter luck next time message

// var myElement3 = document.createTextNode('onclick',
// function(event) {
//   var message3 = document.getElementByClassName('box3');
//   message1.innerText = 'Oops, butter luck next time';
//   },
// );



