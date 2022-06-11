function oddOccurances(input) {
    input = input.split(' ')
    let obj = {};

    for (let el of input) {
        el = el.toLowerCase();
        if (obj.hasOwnProperty(el)) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let result = [];
    Object.entries(obj).filter(x => x[1] % 2 != 0 ? result.push(x[0]) : null)
    console.log(result.join(' '))

}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')