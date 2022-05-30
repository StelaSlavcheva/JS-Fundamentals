function solve(arr){

    arr.sort((a,b) => a-b)
    console.group(arr[0] +' ' +arr[1])
}
solve([3, 0, 10, 4, 7, 3])