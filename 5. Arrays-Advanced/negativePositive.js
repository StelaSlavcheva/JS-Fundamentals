function negativePositive(arr){
    let result = []
     arr.map(el => el<0 ? result.unshift(el): result.push(el))

     console.log(result.join('\n'))
}
negativePositive([7, -2, 8, 9])