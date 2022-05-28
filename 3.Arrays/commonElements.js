function compareArr(arr1, arr2){
    let result = [];

    for (let el of arr1){
        arr2.filter(x => x===el? result.push(el): x=x )
    }
    console.log(result.join('\n'))

}
compareArr(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])