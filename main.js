// Change all box colors on mouseover

var box-color = document.getElementsByClassName('box1', 'box2', 'box3');

function colorChange(){
    box-color.style.color = '#FF0000';
};

for (i=0; i<colors.length; i++) {
    colors[i].addEventListener('mouseover', colorChange);
}

// Box 1 - Close, but no cigar message

var myElement1 = document.createTextNode('click',
function(event) {
  var message1 = document.getElementByClassName('box1');
  message1.innerHTML = 'Oooh - so close, but no cigar';
  },
);

// Box 2 - DING DING DING - We have a winner message

var myElement2 = document.createTextNode('click',
function(event) {
  var message2 = document.getElementByClassName('box2');
  message1.innerHTML = 'DING DING DING - We have a winner';
  },
);

// Box 3 - Oops, butter luck next time message

var myElement3 = document.createTextNode('click',
function(event) {
  var message3 = document.getElementByClassName('box3');
  message1.innerHTML = 'Oops, butter luck next time';
  },
);



