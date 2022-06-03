function solve(arr){
    let n = arr.shift();
    let start= arr.slice(0, n).join(' ');
    let end = arr.slice(-n).join(' ');

    console.log(`${start}\n${end}`);
}
solve([2, 
    7, 8, 9]
    
   )