function addAndSubtract(arr){
    let sumOriginalArray = arr.reduce((acc,c) => acc+c, 0);
    let result = arr.map((x,i) => x%2 == 0? x+=i: x-=i);
    let sumResultArr = result.reduce((acc,c) => acc+c, 0);
    console.log(result)
    console.log(sumOriginalArray)
    console.log(sumResultArr)

}
addAndSubtract([5, 15, 23, 56, 35])