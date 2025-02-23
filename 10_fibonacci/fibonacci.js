const fibonacci = function(n) {
    //check argument is valid
    if (n < 0) {return "OOPS"};
    if (n == 0) {return 0};

    // A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
    let index = n - 1;
    const fibonacciArray = [1, 1, 2, 3, 5, 8];
    
    if (n > fibonacciArray.length) {
        for (let i = fibonacciArray.length; i < n; i++) {
            let newNumber = fibonacciArray[i-2] + fibonacciArray[i-1];
            fibonacciArray.push(newNumber);
        }
    }
    return fibonacciArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
