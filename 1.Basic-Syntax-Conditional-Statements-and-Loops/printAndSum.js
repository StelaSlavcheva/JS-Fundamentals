function printAndSum (start, end){
    let sum = 0;
    let arr = [];

    for (let i=start; i<=end; i++){
        sum+=i;
        arr.push(i);
    }
    return (`${arr.join(' ')}\nSum: ${sum}`);
    

}
console.log(printAndSum(5, 10))