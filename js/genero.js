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




}

)