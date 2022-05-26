function solve(year, month, day) {
    let tomorrow = new Date(year, month-1, day + 1)
    console.log(tomorrow)
}
solve(2016, 12, 31)
