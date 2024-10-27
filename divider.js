function divide(n, k) {
    let wholePart = Math.floor(n / k );
    let remainder = n % k;
    return `${wholePart} ${remainder}`;
}

let n = 18;
let k = 4;
console.log(divide(n, k));