function division(num) {
    if (num % 10 === 0) {
        return (`The number is divisable by 10`)
    } else if (num % 7 === 0) {
        return (`The number is divisable by 7`)
    } else if (num % 6 === 0) {
        return (`The number is divisable by 6`)
    }
    else if (num % 3 === 0) {
        return (`The number is divisable by 3`)
    }
    else if (num % 2 === 0) {
        return (`The number is divisable by 2`)
    }

}
console.log(division(30))