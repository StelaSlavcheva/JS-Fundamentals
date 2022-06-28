function deserialize(input) {
   input.pop()

    let arrOfChars = input.split(`,`)
    let result = [];

    let j=0;
        while (arrOfChars != [`end`]) {
            for (let i = 0; i < arrOfChars.length; i++) {

                let [char, dots, ...index] = arrOfChars[i].split(``)
                

                for (let k=0 ; k<index.length; k++) {
                    if (Number(index[k]) === j) {
                        result.push(char)
                        j++;
                    }
                }


            }
        }
        console.log(result.join(``))
    }



deserialize([ 'a:0/2/4/6', 'b:1/3/5', 'end' ])