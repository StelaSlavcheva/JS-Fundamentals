function print(arr) {
    arr = arr.map(Number);
    let step = arr.pop();

    let result = [];

    for (let i = 0; i < arr.length; i += step){
        result.push(arr[i]);
    }
        
    console.log(result.join(' '))
}
print(['5', '20', '31', '4', '20', '2'])