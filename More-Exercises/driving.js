function toUpper(input) {
    let arr = input.toUpperCase().match(/\w+/gim).join(', ')
    console.log(arr)
}
toUpper('Hi, how are you?')