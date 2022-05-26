function sumDigits(num) {
    let result = num.toString()
        .split('')
        .map(Number)
        .reduce((acc, c) => acc + c, 0);

    return result;

}
console.log(sumDigits(245678))