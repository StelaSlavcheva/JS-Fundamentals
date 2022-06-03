function solve(input) {
    return input.filter((value, index, arr) => arr.indexOf(value) === index)
}
console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));