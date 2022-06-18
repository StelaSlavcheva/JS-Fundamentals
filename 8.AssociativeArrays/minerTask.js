function minerTask(arr){

    let resources = {}

    for (i=0; i<arr.length; i+=2){

        let resource = arr[i];
        let quantity = Number(arr[i+1])

        if(!resources.hasOwnProperty(resource)){
            resources[resource] = 0
        }
        resources[resource] += quantity
    }
    for (let key in resources){
        console.log(`${key} -> ${resources[key]}`)
    }   
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]    )