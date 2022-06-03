function toJSON (a,b,c){

    let obj ={
        name: a,
        lastName: b,
        hairColor: c,
    }

    console.log(JSON.stringify(obj))

}
toJSON('George',
'Jones',
'Brown'
)