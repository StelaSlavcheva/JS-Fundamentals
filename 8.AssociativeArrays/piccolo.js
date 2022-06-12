function piccolo(input) {

    let obj = {};

    for (let el of input) {
        let [direction, carNum] = el.split(' ');

        if(obj.hasOwnProperty(carNum) ){
            delete obj[carNum]
        }else{
            obj[carNum] = 1
        }
    }
    let sorted = Object.entries(obj)
    
    if (sorted.length === 0){
        console.log('Parking lot is empty')
    }else{
        sorted.sort((a,b) => {
            let first = Number (a[0].slice(2,6));
            let second = Number( b[0].slice(2,6));
            return first - second;
        }
        ).forEach( x => console.log(x[0]))
    }


}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)