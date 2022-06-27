function matchPhoneNumber(input){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    let nums = [];
    
    let matches = pattern.exec(input)

    while (matches != null){
        nums.push(matches[0]);
        matches = pattern.exec(input)

            }

    console.log(nums.join(`, `))
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])