function companyUsers(input){

    let list = new Map();

    for (let el of input){

        let[company, id] = el.split(' -> ')  
        if(! list.has(company)){
            list.set(company, [id])
        }else{
           let isPresent = list.values();
          let a =  isPresent.has(id);
           if(a == false){
            list[company][id].push(id)
           }
        }
    
    }
    console.log(list)
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )