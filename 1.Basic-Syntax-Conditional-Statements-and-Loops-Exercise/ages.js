function ages(num) {
    if (num > 0 && num <= 2) {
        return ('baby')
    }
    if (num > 2 && num <= 13) {
        return ('child')
    }
    if (num > 13 && num <= 19) {
        return ('teenager')
    }

    if (num > 19 && num <= 65) {
        return ('adult')
    }
    if (num > 65 ) {
        return ('elder')
    }else{
        return ('out of bounds')
    }
  
}
console.log(ages(-1))