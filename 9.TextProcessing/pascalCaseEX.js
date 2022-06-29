function pascalCase (str){
    let result = [];
    let cap = 0;

    for (let i=1; i<str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            let word = str.substring(cap, i);
            result.push(word);
            cap =i;
        }
    }
    result.push( str.substring(cap, str.length))
    console.log(result.join(`, `))

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')