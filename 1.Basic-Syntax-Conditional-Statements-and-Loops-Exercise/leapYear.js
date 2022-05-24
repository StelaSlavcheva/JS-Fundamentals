function leapYear(num){
    if(num%4===0 && num%100 != 0){
        return ('yes')
    }else{
        return ('no')
    }

}
console.log(leapYear(2003))