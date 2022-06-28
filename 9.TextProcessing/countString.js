function countString(text, searchWord){

//     let arr = text.split(` `);
//     let counter = 0;

//     for (let word of arr){
//         if (word === searchWord)
//         counter ++
//     }
//  console.log(counter)

 console.log(text.split(` `).filter(w => w==searchWord).length)
}
countString("This is a word and it also is a sentence","is")