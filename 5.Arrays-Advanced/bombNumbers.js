function solve(inputArr, arr2) {
    let bombNum = arr2[0];
    let power = arr2[1];
    for (let el of inputArr) {
        let index = inputArr.indexOf(bombNum);
        if (index !== -1) {
            let deleteCount = power * 2 + 1;
            inputArr.splice(index - power, deleteCount)
        }
    }
    return inputArr.reduce((acc, c) => acc + c)
}
console.log(solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]))
