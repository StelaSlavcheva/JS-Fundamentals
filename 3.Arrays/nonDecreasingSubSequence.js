function solve(arr) {
    let newArr = [];
    let current=0;
    for (let i = 0; i < arr.length; i++) {
        if (current < arr[i]){
            current=arr[i];
            newArr.push(current);
        }
    }
console.log(newArr)
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
