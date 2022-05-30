function distinctArr(arr){

    let newArr = [];

    for (const n of arr){
        if (!newArr.includes(n)){
            newArr.push(n);
        }
    }
    console.log(newArr.join(` `))

}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])