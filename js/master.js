window.addEventListener ('load', function(){
    let peliculas = document.querySelector ('#peliculasPopulares')
    //console.log(peliculas);
    //PELICULAS POPULARES
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=942febef73deb21c3f70ec6b055cb722&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        //console.log(populares.results[0].poster_path);
        populares.results.forEach(pelicula => {
            let articulo = document.createElement ('article')
            articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'>
            `
            peliculas.append(articulo)
        });
    })
    
//SERIES POPULARES
let series = document.querySelector ('#seriesPopulares')
fetch('https://api.themoviedb.org/3/tv/popular?api_key=942febef73deb21c3f70ec6b055cb722&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(seriesPopulares){
        //console.log(populares.results[0].poster_path);
        seriesPopulares.results.forEach(serie => {
            let articulo = document.createElement ('article')
            articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${serie.poster_path}' alt='${serie.title}'>
            `
            series.append(articulo)
        });
    })
//ULTIMOS ESTRENOS
let estrenos = document.querySelector ('#ultimosEstrenos')
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=942febef73deb21c3f70ec6b055cb722&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(ultimosEstrenos){
        //console.log(populares.results[0].poster_path);
        ultimosEstrenos.results.forEach(estreno => {
            let articulo = document.createElement ('article')
            articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${estreno.poster_path}' alt='${estreno.title}'>
            `
            estrenos.append(articulo)
        });
    })
    .catch(function (error){
        console.log(error)
    })



})