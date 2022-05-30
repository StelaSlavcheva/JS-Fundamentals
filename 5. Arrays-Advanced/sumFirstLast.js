function sumFirstandLast(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    console.log(first+last);
}
sumFirstandLast(['20', '30', '40']);
