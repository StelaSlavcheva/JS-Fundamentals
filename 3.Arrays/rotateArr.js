function rotateArr (arr){
    let rotationCount = arr.pop();

    for (let i = 1; i<=rotationCount; i++ ){
        let last = arr.pop();
        arr.unshift(last);

    }
    console.log(arr.join(' '))
}
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])