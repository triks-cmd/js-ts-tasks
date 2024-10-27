function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10; 
        n = Math.floor(n / 10); 
    }
    return sum;
}


let n = 1234;
console.log(sumOfDigits(n));
