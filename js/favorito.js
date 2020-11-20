window.addEventListener ('load', function(){
    var APIkey="942febef73deb21c3f70ec6b055cb722"
  var URLPoster="https://image.tmdb.org/t/p/original/"


  var recuperoStorage = localStorage.getItem("favoritos");


      if (recuperoStorage == null ){

        favoritos=[];
        document.querySelector('#favoritos').innerHTML = "<li>No hay ninguna serie favorita</li>"
      }
      else {

        favoritos=JSON.parse(recuperoStorage);

      }

      for (var i = 0; i < favoritos.length; i++) {
        fetch("https://api.themoviedb.org/3/movie/"+favoritos[i]+"?api_key="+APIkey+"&language=en-US")
        .then(function (response) {
          return response.json();
        })
        .then(function (favoritos) {
          document.querySelector('#favoritos').innerHTML += "<li><a href='detalle.html?idSerie="+favoritos.id+"'><img src="+URLPoster+favoritos.poster_path+" alt=''></a></li>"

        })
      }
    
})