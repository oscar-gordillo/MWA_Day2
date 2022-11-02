const fibonacci= function(number) {
    if (number <= 2) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }
} 
console.log("Fibonacci of minus 30 is "+ fibonacci(30)*-1);