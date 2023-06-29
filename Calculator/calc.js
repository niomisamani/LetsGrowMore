const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
const specialChars = ['^', '/', '*', '-', '+', '='];
let output = '';

const calculate = (btnValue) => {
  if (btnValue === '=') {
    try {
      output = eval(output.replace('^', '**'));
      if (isNaN(output)) {
        throw Error('Invalid calculation');
      }
    } catch (error) {
      output = 'Error';
    }
  } else if (btnValue === 'AC') {
    output = '';
  } else if (btnValue === 'Del') {
    output = output.toString().slice(0, -1);
  } else {
    if (output === '' && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
