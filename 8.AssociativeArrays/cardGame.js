function cardGame(input) {

    let obj = {};

    for (let el of input) {
        let [name, cards] = el.split(': ');
        cards = cards.split(', ');

        if (obj[name]) {
            cards.forEach(x => obj[name].push(x));
        }
        else {
            obj[name] = cards;
        }
    }

    for (let el in obj) {
        let unique = obj[el].filter((value, index, self) => self.indexOf(value) === index);
        let sum = 0;

        for (let card of unique) {
            card = card.split('');
            let first;
            let second;
            if (card.length <= 2) {
                first = card[0];
                second = card[1];
            } else {
                first = card[0] + card[1];
                second = card[2];

            }


            switch (first) {
                case '1': first = 1; break;
                case '2': first = 2; break;
                case '3': first = 3; break;
                case '4': first = 4; break;
                case '5': first = 5; break;
                case '6': first = 6; break;
                case '7': first = 7; break;
                case '8': first = 8; break;
                case '9': first = 9; break;
                case '10': first = 10; break;
                case 'J': first = 11; break;
                case 'Q': first = 12; break;
                case 'K': first = 13; break;
                case 'A': first = 14; break;
            }
            switch (second) {
                case 'S': second = 4; break;
                case 'H': second = 3; break;
                case 'D': second = 2; break;
                case 'C': second = 1; break;
            }
            sum += first * second;
        }
        obj[el] = sum;
    }

    for (let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
    

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    
    )