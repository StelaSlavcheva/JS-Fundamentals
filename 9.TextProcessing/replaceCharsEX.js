function replaceChars(str) {
    arr = str.split(``);
    let newStr = ``

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            newStr += arr[i]
        }
        if (!newStr.includes(arr[i])) {
            newStr += arr[i]
        }
    }
    console.log(newStr)
}
replaceChars('aaaaabbbbbcdddeeeedssaa')