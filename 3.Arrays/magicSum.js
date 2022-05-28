function magic(arr, num) {
    let isMagic =[];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] +arr[i+1] == num){
            let a = `${arr[i]} ${arr[i+1]}`
            isMagic.push(a)
        }
    }
    
    console.log(isMagic.join('\n'))
  
}
magic([1, 7, 6, 2, 19, 23],    8    )