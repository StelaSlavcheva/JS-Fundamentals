function arrManipulations(arr) {

    let newArr = arr.shift().split(' ');
    newArr.map(Number);

    for (el of arr) {
        let[command, ...num] = el.split(' ');
        if (command === 'Add') {
            newArr.push(num[0]);
        }else if( command === 'Remove'){
            let index = newArr.indexOf(num[0]);
            newArr.splice(index,1);
        }else if (command === 'RemoveAt'){
            let index2 = num[0];
            newArr.splice(index2,1);
        }else if(command === 'Insert'){
            let insertIindex = num[1];
            let insertNum = num[0];
            newArr.splice(insertIindex,0,insertNum);
        }
    }

    console.log(newArr.join(' '))




}
arrManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)