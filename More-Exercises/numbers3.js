function numbers(input) {
    let arr = [input]
    let newArr = arr.toString().split(` `).map(Number)

    let sum = 0;
    let count = 0
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
        count++
    }

    let average = (sum / count).toFixed(2);
    let greaterArr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > average) {
            greaterArr.push(newArr[i])
        }
    }

    let result = greaterArr.sort((a, b) => b - a).slice(0, 5);
    console.log(result.join(` `))

    if (result.length < 1 || result == undefined) {
        console.log(`No`)
    }
}
numbers(`1`)