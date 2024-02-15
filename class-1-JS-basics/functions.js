function sum(num1, num2, fnToCall) {
    //take 2 numbers do the sum and return
    
    let result = num1 + num2
    fnToCall(result);
}

// const valueOfSum = sum(3, 4);
// console.log(valueOfSum);

// callbacks - when a function can take another function as input

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

// Ans: we sent a function as an argument inside another function
const ans = sum(1, 1, displayResult);

function calculateArithmetic(a, b, type) {
    if (type == "sum") { return sumofnumbers(a, b) }
    if (type == "minus") { return sub(a, b); }
}
function sumofnumbers(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}


const answer = calculateArithmetic(10, 5, "sum")
console.log(answer);



// calling a function inside another function by passing a function as an argument - callback. means calling back another function from inside a function.
function calculateArithmetic_second(a, b, finalcalculateArithmetic) {
    const ans = finalcalculateArithmetic(a, b);
    return ans;
}

const answer_again = calculateArithmetic_second(10, 5, sumofnumbers)
console.log(answer_again);