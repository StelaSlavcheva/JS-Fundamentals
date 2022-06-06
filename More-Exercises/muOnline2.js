function muOnline(arr) {

        let health = 100;
        let coins = 0;
        let roomCount = 0;
        let newArr = arr.toString(``).split(`|`)
    
        for (let i = 0; i < newArr.length; i++) {
            roomCount++;
    
            let infoArr = newArr[i].toString(``).split(` `);
    
            if (infoArr[0] === `potion`) {
               
                let healingPoints= Number(infoArr[1]) 
               
                    if(health + healingPoints> 100){
                       
                        points = 100-health ;
                        health = 100;
                        console.log(`You healed for ${points} hp.`);
                        console.log(`Current health: ${health} hp.`)                              
                    }
                    else{
                        console.log(`You healed for ${healingPoints} hp.`);
                        console.log(`Current health: ${health+=healingPoints} hp.`)
                    }
                         
            } else if (infoArr[0] === `chest`) {
                coins += Number(infoArr[1]);
                console.log(`You found ${infoArr[1]} bitcoins.`)
    
            } else {
                health -= Number(infoArr[1]);
                if (health > 0) {                
                    console.log(`You slayed ${infoArr[0]}.`)
                } else {
                    console.log(`You died! Killed by ${infoArr[0]}.`);
                    console.log(`Best room: ${roomCount}`)
                    return;
                }
            }
        }
        if (roomCount >= newArr.length) {
            console.log(`You've made it!`)
            console.log(`Bitcoins: ${coins}`)
            console.log(`Health: ${health}`)
        }
    }

muOnline(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])