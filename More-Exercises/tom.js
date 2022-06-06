function tom(arr, arg2, arg3) {
    
    let items = arr.map(Number)
    let entryPoint = Number(arg2)
    let command = arg3
    let sumLeft = 0;
    let sumRight = 0;

    if (command == `cheap`) {
        for (let i = 0; i < entryPoint; i++) {
            if (items[i] < items[entryPoint])
                sumLeft += items[i]
        }
        for (let a = entryPoint + 1; a < items.length; a++) {
            if (items[a] < items[entryPoint])
                sumRight += items[a]
        }
        if (sumRight>sumLeft){
            console.log(`Right - ${sumRight}`)
        } else{
            console.log(`Left - ${sumLeft}`)
        }
    }

    if (command == `expensive`) {
        for (let b = 0; b < entryPoint; b++) {
            if (items[b] >= items[entryPoint])
                sumLeft += items[b]
        }
        for (let c = entryPoint + 1; c < items.length; c++) {
            if (items[c] >= items[entryPoint])
                sumRight += items[c]
        }
        if (sumRight>sumLeft){
            console.log(`Right - ${sumRight}`)
        } else{
            console.log(`Left - ${sumLeft}`)
        }
    }
}


// tom([1, 5, 1],1,"cheap")
tom([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],7,"expensive")