function bonusScoring(arr){
    let countOfStudents =Number(arr.shift())
    let lectures = Number(arr.shift())
    let additionalBonus = Number(arr.shift())
    let maxBonus=0;
    let maxAtt = 0;

    for (let i = 0; i < arr.length; i++) {
        let attendances = Number(arr[i])
        let bonus = attendances/lectures*(5+additionalBonus)
        
        if(bonus> maxBonus){
            maxBonus = bonus;
            maxAtt = attendances
        }
    }
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
console.log(`The student has attended ${maxAtt} lectures.`)
}
bonusScoring(['5',  '25', '30', '12', '19', '24',
'16', '20'])