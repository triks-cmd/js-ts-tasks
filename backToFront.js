function copyAndPasteSymbols(str, num) {
    if (num > str.length) {
        return "The number of symbols to copy exceeds the length of the string.";
    }
    let part = str.slice(0, num);
    return part + str + part; 
}


let originalString = "hello";
let numSymbols = 2;
console.log(copyAndPasteSymbols(originalString, numSymbols));
