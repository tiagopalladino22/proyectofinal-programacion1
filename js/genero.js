window.addEventListener ('load', function(){
    
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=942febef73deb21c3f70ec6b055cb722")
.then(function (response) {
  return response.json();
  })
.then(function (listaGeneros) {
  console.log(listaGeneros);
  for (var i = 0; i < listaGeneros.genres.length; i++) {
    document.querySelector("section.generos").innerHTML += "<li><a href='detalleGenero.html?idGenero="+listaGeneros.genres[i].id+"'>"+listaGeneros.genres[i].name+"</a></li>"
    }})

    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=942febef73deb21c3f70ec6b055cb722")
    .then(function (response) {
      return response.json();
      })
    .then(function (listaGenerosSerie) {
      console.log(listaGenerosSerie);
      for (var i = 0; i < listaGenerosSerie.genres.length; i++) {
        document.querySelector("section.generosSerie").innerHTML += "<li><a href='detalleGenero.html?idGenero="+listaGenerosSerie.genres[i].id+"'>"+listaGenerosSerie.genres[i].name+"</a></li>"
        }})


}

)