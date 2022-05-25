function sortNumbers(a,b,c){
    let arr= [];
    arr.push(a,b,c);
    arr.sort((a, b) => b-a);

 return arr.join('\n')

}
console.log(sortNumbers(2,1,3))