function solve(arr) {
    let condensed = [];

    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            let currentEl = arr[i];
            let nextEl = arr[i + 1];
            condensed.push(currentEl + nextEl);
        }

        arr = condensed;
        condensed = [];
    }
    console.log(arr[0])
}
solve([2, 10, 3]);
