function equalSums(arr) {
    let a=  'no';
    for (let i = 0; i < arr.length; i++) {
        let left = arr.slice(0, i).reduce((acc, c) => acc + c, 0);
        let right = arr.slice(i + 1).reduce((acc, c) => acc + c, 0);

        if (left == right) {
            a = i;
        } 
    }
   console.log(a)
}
equalSums([1])