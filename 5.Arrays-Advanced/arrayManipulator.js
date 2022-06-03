function solve(arr, arr2) {

    for (let el of arr2) {
        let [command, index, ...element] = el.split(' ');
        index = Number(index);
        element = element.map(Number);


        if (command === 'add') {
            let numArr = element.map(Number);
            arr.splice(index, 0, element[0]);
        } else if (command === 'addMany') {
            arr.splice(index, 0, ...element);
        } else if (command === 'contains') {
            let elIndex = arr.indexOf(index);
            console.log(elIndex)
        } else if (command === 'remove') {
            arr.splice(index,1);
        } else if (command === 'shift') {
            for (let i = 0; i < index; i++) {
                let current = arr.shift();
                arr.push(current)
            }
        } else if (command == 'sumPairs') {
            let sum = [];
            for (let i = 0; i < arr.length; i + 2) {
                sum.push(arr[i] + arr[i + 1])
            }
            arr = sum;
        } else if (command == 'print') {
            break;
        }
    }
    console.log(arr)
}
solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])