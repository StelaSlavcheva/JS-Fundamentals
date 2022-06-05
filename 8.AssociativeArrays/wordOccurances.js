function occurances(arr){

    let obj= {};

    for (let el of arr){
        if (obj[el]){
            obj[el]+=1;
        }else{
            obj[el] = 1;
        }
    }

    let sorted = Object.entries(obj);
    sorted.sort((a,b) => b[1] - a[1]);

    for (let [word, count] of sorted){
        console.log(`${word} -> ${count} times`)
    }


}
occurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])