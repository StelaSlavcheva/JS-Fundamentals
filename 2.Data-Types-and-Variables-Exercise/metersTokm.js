function convert(num) {
    let km = (num / 1000).toFixed(2);
    return km;
}
console.log(convert(1852))