function reverseArr (n, arr){

    let newArr = arr.slice(0,n).reverse().split('').join(' ');;

    console.log(newArr)
}
reverseArr(4, [-1, 20, 99, 5])