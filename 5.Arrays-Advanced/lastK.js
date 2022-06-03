function solve(n,k){
    

    let arr = [1];

    for (let i=1; i<n; i++){

        let sliced = arr.slice(-k).reduce((acc,c) => acc+c, 0);
        arr.push(sliced)
    }
    console.log(arr)

}
solve(8, 2)