function solve(arr){
arr.map(Number);
let section1 = arr[0];
let section2 = arr[1];
let section3 = arr[2];

let dailyConcrete = [];

while(section1<30 || section2<30 || section3<30 ){
    let dailySum = 0;
    if (section1 <30){
        section1++;
        dailySum+= 195
    }
    if (section2 <30){
        section2++;
        dailySum+= 195
    }
    if (section3 <30){
        section3++;
        dailySum+= 195
    }
    dailyConcrete.push(dailySum)
}
let totalConcrete = dailyConcrete.reduce((acc,c) => acc+c, 0);
let finalCost = totalConcrete * 1900;

console.log(dailyConcrete.join(', '))
console.log(`${finalCost} pesos`)

}
solve([21, 25, 28])