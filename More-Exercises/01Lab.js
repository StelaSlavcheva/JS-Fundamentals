function solve(arr) {
    let newArr = [arr[0]]
    let i = 1;
    while (i < arr.length) {
        let index = newArr.length - 1
        if (arr[i] >= newArr[index]) {
            newArr.push(arr[i]);
            i++
        } else {
            i++
        }
    }
   return newArr

}
console.log(solve([1, 
    2, 
    3,
    4]
    
    
    ))