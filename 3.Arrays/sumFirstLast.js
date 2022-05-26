function sumFirstLast(arr){
    let first = arr.shift();
    let last = arr.pop();
    let result =  first + last;
    console.log(result)

}
sumFirstLast([10, 17, 22, 33])