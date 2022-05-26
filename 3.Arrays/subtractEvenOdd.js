function subtract(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    arr.filter(x => x % 2 == 0 ? sumEven += x : sumOdd += x);

    console.log(sumEven - sumOdd)
}
subtract([1, 2, 3, 4, 5, 6])