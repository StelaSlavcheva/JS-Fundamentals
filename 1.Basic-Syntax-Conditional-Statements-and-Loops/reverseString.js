function stringReverse(str) {
    let result = str.split('').reverse().join('');
    return result;
}
console.log(stringReverse('Hello'))