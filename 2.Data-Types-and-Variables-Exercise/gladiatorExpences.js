function gladiatorExpences (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expences = 0;

    for (let i=1; i<=lostFights; i++){
        let shiledBreakCount = 0;

        if (i%2 == 0){
            expences += helmetPrice;
        }
        if(i%3 == 0){
            expences += swordPrice;

        }if(i%2 == 0 && i%3 == 0 ){
            expences += shieldPrice;
            shiledBreakCount ++;

        }if(shiledBreakCount % 2 == 0 && shiledBreakCount>0){
            expences += armorPrice;
        }
    }
    return (`Gladiator expenses: ${expences} aureus`)
}
console.log(gladiatorExpences(7,    2,     3,     4,    5    ))