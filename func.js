/*
Create an arrow function called square that takes a number as an argument and returns its square. Use
the arrow function to calculate the square of a given number and display the result.
*/

const calcsqr = (num) => num * num;
const result = calcsqr(2);
console.log(result);

/////////////////////////////////////////////////////////////////

/*
Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
personalized greeting message. Use this function to greet three different people.
*/

const greetings = function (name) {
  return `hey ${name}, Good Morning nice to meet you`;
};
console.log(greetings("yash"));

/////////////////////////////////////////////////////////////////////

/*
Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.
*/
(function () {
  function square(x) {
    return x * x;
  }
  console.log(square(5));
})();

////////////////////////////////////////////////////////////////////////

/*
Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.
*/

const factorial = function (n) {
  if (n === 0) return 1;

  let result = n * factorial(n - 1);
  return result;
};
console.log(factorial(7));

////////////////////////////////////////////////////////////////////////
/*
Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.
*/

const calctax = (income) => {
  if (income < 9000000) {
    let tax = (income * 20) / 100;
    return tax;
  } else {
    let tax = (income * 30) / 100;
    return tax;
  }
};
console.log(calctax(700000), " Tax to be paid");

////////////////////////////////////////////////////////////////////////

/*
Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.
*/

const curry = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const addtwonum = curry(5)(5);
console.log(addtwonum);

////////////////////////////////////////////////////////////////////////
