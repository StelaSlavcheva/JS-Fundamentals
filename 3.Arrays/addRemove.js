function addRemove(arr) {
    let num = 1;
    let result = [];

    for (el of arr) {
        if (el === 'add') {
           result.push(num); 
           num++;
                        
        } else if (el === 'remove') {
            result.pop(); 
             num++;
        }
    }

    result.length == 0 ? console.log('Empty') : console.log(result.join(' '))

}
addRemove(['add', 'add', 'remove', 'add', 'add'])