var num1, num2, sum;
var currentOperator;
var parts;

const current = document.getElementById("current");
const previous = document.getElementById("previous");

const add = function(a, b) // Functions
{
  return a + b;
}

const subtract = function(a, b)
{
  return a - b;
}

const multiply = function(a, b)
{
  return a * b;
}

const divide = function(a, b)
{
  return a / b;
}

const changeCurrent = function(input)
{
  current.textContent += input;
}

const deleteContent = function(input)
{
  current.textContent = input;
  previous.textContent = input;
}

const addComma = function(input)
{
  if (!current.textContent.includes('.') && !current.textContent == '' )
    {
      current.textContent += input;
    }
}

const operateCurrent = function(input)
{
  if (!current.textContent == '' && !current.textContent.includes('x') && !current.textContent.includes('/') && !current.textContent.includes('+') && !current.textContent.includes('-'))
    {
      current.textContent += input;
    }
  currentOperator = input; 

  parts = current.textContent.split(currentOperator);
  num1 = parseFloat(parts[0]);
  num2 = parseFloat(parts[1]);
}

const calculateContent = function()
{
  previous.textContent = current.textContent;

  parts = current.textContent.split(currentOperator);
  num1 = parseFloat(parts[0]);
  num2 = parseFloat(parts[1]);

  switch(currentOperator)
  {
    case "+":
      current.textContent = add(num1, num2);
      break;
    case "-":
      current.textContent = subtract(num1, num2);
      break;
    case "x":
      current.textContent = ((multiply(num1, num2)).toFixed(2));
      break;
    case "÷":
      current.textContent = divide(num1, num2);
      break;
  }
}
