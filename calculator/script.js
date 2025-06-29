const display = document.getElementById('display');

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    append(key);
  }

  if (key === 'Enter') {
    calculate();
  }

  if (key === 'Backspace') {
    deleteLast();
  }

  if (key === 'Escape' || key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
