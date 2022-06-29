//     function valueOfString(input) {

//     let result = 0;

//     let str = input.shift().split(``)
//     let arg1 = input.shift()

//     if (arg1 === `UPPERCASE`) {
//         for (const char of str) {
//             let code = char.charCodeAt();
//             if (code >= 65 && code <= 90) {
//                 result += Number(code);
//             }
//         }
//     }
//     if (arg1 === `LOWERCASE`) {
//         for (const char of str) {
//             let code = char.charCodeAt();
//             if (code >= 97 && code <= 122) {
//                 result += Number(code);
//             }
//         }
//     }
//     console.log(`The total sum is: ${result}`);
// }
valueOfString(['AC/DC','UPPERCASE'])

function valueOfString([str, command]) {
    command == 'LOWERCASE' ?
      str = str.match(/[a-z]/g).map(el => el.toLowerCase().charCodeAt(0)) :
      str = str.match(/[A-Z]/g).map(el => el.toUpperCase().charCodeAt(0))
  
    console.log( `The total sum is: ${str.reduce((a, b) => a + b)}`)
  }
  valueOfString(['AC/DC','UPPERCASE'])







