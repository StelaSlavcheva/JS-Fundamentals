function wordsTracker(input){

    let obj = {};

    let sentence = input.shift().split(' ');

    sentence.forEach(x => obj[x]=0);

    for (let el of input){
        if(obj.hasOwnProperty(el)){
            obj[el] += 1
        }
    }

    Object.entries(obj)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    .forEach(([key, value]) => console.log(`${key} - ${value}`))


}
wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence', 'sentence', 'sentence','because','this','is','your','task'
    ]
    )