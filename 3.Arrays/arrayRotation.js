function rotations(arr, num) {
    let a = 0;

    for (let i = 1; i <= num; i++) {
        a = arr.shift();
        arr.push(a)

    }
    console.log(arr.join(' '))
}
rotations([32, 21, 61, 1], 4)