function solve(arr) {
    let movies = [];

    for (let el of arr){
        if(el.includes (`addMovie`)){
            let [first, name] = el.split('addMovie ')
            movies.push({ name});
        }else if(el.includes('directedBy')){
            let [name, director] = el.split(' directedBy ');
            let movie = movies.find(m => m.name === name);
            if(movie){
                movie.director = director;
            }
        }else if( el.includes('onDate')){
            let [name, date] = el.split(' onDate ');
            let movie = movies.find( m=> m.name === name);
            if(movie){
                movie.date = date;
            }
        }
    }
    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )