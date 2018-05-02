var correctAnswer;
var num1 = randomNumber();
var num2 = randomNumber();

function resetInput() {
  document.getElementById('answer').value = '';
}

function randomNumber() {
  return Math.floor(Math.random() * 13);
}

function createProblem(){
  correctAnswer = num1 * num2;
  document.getElementById('problem').innerText = " ";
  document.getElementById('problem').append(`${num1} x ${num2}`);
}

function checkAnswer() {
  var answer = document.getElementById('answer').value;
  if (answer == correctAnswer) {
    return "Great Job! " +
    + num1 + " x " + num2 + " is " + (num1 * num2);
  }
  else {
    // alert("Try Again!");
    return "Incorrect! "
    + num1 + " x " + num2 + " is " + (num1 * num2);
  }
}

function appendResult(result) {
  document.getElementById('result').innerHTML = ' ';
  document.getElementById('result').append(result);
}

document.getElementById('answerButton').addEventListener('click', function() {
  appendResult(checkAnswer());
  resetInput();
  createProblem();
});

document.addEventListener('keypress', function (e) {
  if ( e.keyCode == 13 ) {
    answerButton.click();
  }
  });
createProblem();
