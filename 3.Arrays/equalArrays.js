function solve(arr1, arr2) {
    let sum = 0;
    let areIdentical = true;
    let indexofDifference = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            areIdentical = false;
            indexofDifference = i;
            return (`Arrays are not identical. Found difference at ${indexofDifference} index`);

        }
    }
    return (`Arrays are identical. Sum: ${sum}`)

}
console.log(solve(['10','20','30'], ['10','20','30']))