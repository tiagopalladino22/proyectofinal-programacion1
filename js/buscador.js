window.addEventListener('load', function(){
    let peliculas = document.querySelector('.peliculas');
    //console.log(peliculas);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        //console.log(populares.results);

        //populares.results.forEach(pelicula => {
            //let articulo = document.createElement('article')
            //articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt = '${pelicula.title}' />`
            //peliculas.append(articulo)
        //})
            /*for(let i = 0; i < populares.results.length; i++){
                //console.log(populares.results[i].poster_path);
                let articulo = document.createElement('article')
                articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}' alt = '${populares.results[i].title}' />`
                peliculas.append(articulo)
            }*/
            //Otra forma de rfecorrer un array
            //for (let i of populares.results) {
            //    console.log(i.poster_path);
            //}
            for(let i = 0; i < populares.results.length; i++){
                //console.log(populares.results[i].poster_path);
                let articulo = document.createElement('article')
                articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}' alt = '${populares.results[i].title}' />`
                peliculas.append(articulo)
            }



    })
    .catch(function(error){
        console.log(error)
    })

})