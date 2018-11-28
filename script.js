//second button does not work..change button to choices-button and querySelector to get element by class name

let choicesButton = document.getElementById('choices-button');
let questionButton = document.getElementsByClassName('question-button');

let inputOne = document.getElementById('input-one');
let inputTwo = document.getElementById('input-two');

let createQuestion = function() {
  let questionText = inputOne.value;
  let newQuestion = document.createElement('h1');
  newQuestion.textContent = questionText;
  newQuestion.className = 'questionClassName';
  let newH1 = document.createElement('h1');
  newH1.className = 'focus-question';
}
// questionButton.addEventListener('click', function() {
//   createQuestion();
// });

let createBubble = function() {
  let bubbleText = inputTwo.value;
  let newP = document.createElement('p');
  newP.textContent = bubbleText;
  newP.className = 'bubble-text';
  let newDiv = document.createElement('div');
  newDiv.className = 'bubble bubble__small';
  newDiv.append(newP);
  document.querySelector('main').append(newDiv);
  inputTwo.value = '';
  inputTwo.focus();
};

choicesButton.addEventListener('click', function() {
  createBubble();
});

let createBubbleWithEnterKey = function(e) {
  if (e.key === 'Enter') {
    createBubble();
  }
}

inputTwo.addEventListener('keyup', function(e) {
  createBubbleWithEnterKey(e);
})


let popBubble = function(e) {
  console.log(e);
  let classes = Array.from(e.target.classList);
  if (classes.includes('bubble')) {
    e.target.remove();
  } else if (classes.includes('bubble-text')) {
    e.target.parentNode.remove();
  };
};

window.addEventListener('click', function(e) {
  popBubble(e);
});
