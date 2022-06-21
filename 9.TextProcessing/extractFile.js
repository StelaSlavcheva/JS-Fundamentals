
function extractFile(input) {
    let arr = input.split(`\\`)
    let final = arr.pop().split(`.`)

    let fileExtension = final.pop()

    console.log(`File name: ${final.join(`.`).toString()}`)
    console.log(`File extension: ${fileExtension}`)

}
extractFile('C:\\Projects\\Data-Structures\\Linked.List.cs')
