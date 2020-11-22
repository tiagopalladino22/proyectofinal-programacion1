window.addEventListener ('load', function(){
    
    let APIkey = '942febef73deb21c3f70ec6b055cb722'
    var URLPoster="https://image.tmdb.org/t/p/original/"
    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let id = detalleGeneroObjeto.get('idGenero');

    
  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (generoDetalle) {
          console.log(generoDetalle);
          for (var i = 0; i < generoDetalle.results.length; i++) {
              document.querySelector("#generoDetalle").innerHTML += "<li><a href='detalleSerie.html?idSerie=" + generoDetalle.results[i].id + "'><img src=" + URLPoster + generoDetalle.results[i].poster_path + " alt=''></a></li>";
          }

      })

      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (generoDetalle) {
          console.log(generoDetalle);
          for (var i = 0; i < generoDetalle.results.length; i++) {
              document.querySelector("#generoDetalle").innerHTML += "<li><a href='detalle.html?idSerie=" + generoDetalle.results[i].id + "'><img src=" + URLPoster + generoDetalle.results[i].poster_path + " alt=''></a></li>";
          }

      })
})