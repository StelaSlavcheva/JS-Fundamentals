function rounding(num, precision){
    let result = num.toFixed(precision);
    return result;
}
console.log(rounding(3.1415926535897932384626433832795,2))