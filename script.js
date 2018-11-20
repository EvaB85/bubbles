let button = document.querySelector('button');

let createBubble = function() {
  let bubbleText = document.querySelector('input').value;
  let newP = document.createElement('p');
  newP.textContent = bubbleText;
  newP.className = 'bubble-text';
  let newDiv = document.createElement('div');
  newDiv.className = 'bubble bubble__small';
  newDiv.append(newP);
  document.querySelector('main').append(newDiv);
};

button.addEventListener('click', function() {
  createBubble();
});

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
