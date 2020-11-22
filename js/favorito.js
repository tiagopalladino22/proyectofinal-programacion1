window.addEventListener ('load', function(){
    var APIkey="942febef73deb21c3f70ec6b055cb722"
  var URLPoster="https://image.tmdb.org/t/p/original/"


  var recuperoStorage = localStorage.getItem("favoritos");


      if (recuperoStorage == null ){

        favoritos=[];
        document.querySelector('#favoritos').innerHTML = "<li>No has seleccionado ninguna pelicula hasta el momento</li>"
      }
      else {

        favoritos=JSON.parse(recuperoStorage);

      }

        for (var i = 0; i < favoritos.length; i++) {
          fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${APIkey}&language=en-US`)
          .then(function (response) {
            return response.json();
          })
          .then(function (favoritos) {
            document.querySelector('#favoritos').innerHTML += "<li><a href='detalle.html?idSerie="+favoritos.id+"'><img src="+URLPoster+favoritos.poster_path+" alt=''></a></li>"

          })
        }
        var recuperoStorageSerie = localStorage.getItem("favoritoSerie");


      if (recuperoStorageSerie == null ){

        favoritoSerie=[];
        document.querySelector('#favoritos').innerHTML = "<li>No tienes ninguna pelicula en tus favoritos</li>"
      }
      else {

        favoritoSerie=JSON.parse(recuperoStorageSerie);

      } 
        for (var i = 0; i < favoritoSerie.length; i++) {
          fetch(`https://api.themoviedb.org/3/tv/${favoritoSerie[i]}?api_key=${APIkey}&language=en-US`)
          .then(function (response) {
            return response.json();
          })
          .then(function (favoritoSerie) {
            document.querySelector('#favoritos').innerHTML += "<li><a href='detalleSerie.html?idSerie="+favoritoSerie.id+"'><img src="+URLPoster+favoritoSerie.poster_path+" alt=''></a></li>"

          })
        } 
    
})