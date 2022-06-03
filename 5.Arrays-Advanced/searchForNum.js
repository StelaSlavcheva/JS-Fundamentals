function solve(input, nums) {
    let [numOfElements, deleteCount, searchNum] = nums;
    let newArr = input.slice(0, numOfElements).splice(deleteCount).filter(x => x == searchNum)
    return `Number ${searchNum} occurs ${newArr.length} times.`

}
console.log(solve([5, 2, 3, 4, 1, 6], [5, 2, 3]))
