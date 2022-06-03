function cat(arr){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }    meow(){
        console.log(`${this.name}, age${this.age} says Meow`)
    }
    }

    for (let el of arr){
        let [catName, catAge] = el.split(' ');

        let cat = new Cat(catName, catAge)
        cat.meow();
    }
 
}cat(['Mellow 2', 'Tom 5'])