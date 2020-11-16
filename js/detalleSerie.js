window.addEventListener ('load', function(){
    
    let APIkey = '942febef73deb21c3f70ec6b055cb722'
    let detalleSerie = location.search;
    let detalleSerieObjeto = new URLSearchParams(detalleSerie);
    let id = detalleSerieObjeto.get('idSerie');

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIkey}&language=en-ES`)
  .then(function (response) {
    return response.json();
  })
  .then(function (serieSolicitada) {
    console.log(serieSolicitada);
    document.querySelector("div.nombre").innerHTML = serieSolicitada.name ;
    document.querySelector("section.imagen img").src = `https://image.tmdb.org/t/p/original${serieSolicitada.poster_path}` ;
    document.querySelector("div.fecha").innerHTML = serieSolicitada.first_air_date ;
    document.querySelector("div.sinopsis").innerHTML = serieSolicitada.overview ;
    for (var i = 0; i < serieSolicitada.genres.length; i++) {
        document.querySelector("div.genero").innerHTML +=  `<a href="../detalleGenero.html"> ${serieSolicitada.genres[i].name}</a>`
      }

     
  })



})