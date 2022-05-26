function sumEven(arr){
    let result = arr.map(Number).filter(x => x%2 ==0).reduce((acc,c) => acc+c, 0);
    console.log(result);

}
sumEven(['1','2','3','4','5','6'])