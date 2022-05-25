function distance(x1, y1, x2, y2) {
    let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return result;
}
console.log(distance(2, 4, 5, 0))