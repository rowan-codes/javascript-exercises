const sumAll = function(number1, number2) {

    //checks for expected number of arguments
    if (arguments.length != 2) return "ERROR";

    // checks for negative numbers, or if any arguments were not integers    
    if (number1 < 0 || number2 < 0) return "ERROR";
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";
    
    // sorts the numbers with a destructured array, swapping them if the first is larger than the second
    if (number1 > number2) [number1, number2] = [number2, number1];

    // calculates sum of all the integers between the two numbers, inclusive
    let sum = 0;
    for (let i = number1; i <= number2; i++){
        sum += i;
    }
    return sum;
    }

// Do not edit below this line
module.exports = sumAll;
