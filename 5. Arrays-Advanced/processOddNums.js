function solve(arr) {

    let result = arr.filter((el, i) => i % 2 != 0)
        .map(el => el = el * 2)
        .reverse()
        .join(' ');

    console.log(result)
}
solve([10, 15, 20, 25])