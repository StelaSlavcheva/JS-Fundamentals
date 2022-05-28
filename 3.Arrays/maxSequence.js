function magic(arr) {
    let longestSeq =[];
    
    for (i = 0; i < arr.length; i++) {
        let newArr = [arr[i]];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newArr.push(arr[i]);
            } else {
                break
            }
        }
        if (longestSeq.length< newArr.length){
            longestSeq = newArr;
        }

    }
    console.log(longestSeq.join` `);
}

magic([0, 1, 1, 5, 2, 2, 6, 3, 3])