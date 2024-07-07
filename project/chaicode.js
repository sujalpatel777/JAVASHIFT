const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'pink') {
      body.style.backgroundColor = 'pink';
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = 'red';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
