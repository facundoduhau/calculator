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

const operate = function(a, b) // Operations
{
  switch(action)
  {
    case 'x':
    return multiply(a, b);

    case '/':
    if(b === 0)
    {
      return Error
    }
    else
    {
      return divide(a, b);
    }

    case '+':
    return add(a, b);

    case '-':
    return subtract(a, b);
  }
}


