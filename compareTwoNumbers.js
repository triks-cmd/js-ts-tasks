function compareTwoNumbers(a, b) {
    if (a > b) {
        return ">";
    } else if (a < b) {
        return "<";
    } else if (a >= b) {
        return ">=";
    } else if (a <= b) {
        return "<=";
    } else {
        return "=";
    }
}


console.log(compareTwoNumbers(5, 3));  
console.log(compareTwoNumbers(3, 5));  
console.log(compareTwoNumbers(5, 5)); 
console.log(compareTwoNumbers(5, 5));  
console.log(compareTwoNumbers(3, 5));  
