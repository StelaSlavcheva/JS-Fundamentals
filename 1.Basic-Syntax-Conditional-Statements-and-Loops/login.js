function login(arr){
 
        let username = arr.shift();
        let pass = username.split(``).reverse().join('');
    
        for (let i = 0; i < arr.length; i++) {
            if (i >= 3 && arr[i] !== pass) {
                console.log(`User ${username} blocked!`);
                break;
            }
            if (arr[i] === pass) {
                console.log(`User ${username} logged in.`)
            }
            else {
                console.log(`Incorrect password. Try again.`)
            }
        }
    
    }
    
login(['Acer','login','go','let me in','recA'])