function maxNumber(arr) {
    let top = [];

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (a < arr[j]) {
                b=false
            }
        }    
        if( b== true){
            top.push(a)
        }
    }
    console.log(top.join(' '))
}
maxNumber([27, 19, 42, 2, 13, 45, 48])