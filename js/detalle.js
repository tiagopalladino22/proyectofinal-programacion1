window.addEventListener ('load', function(){
    
        let APIkey = '942febef73deb21c3f70ec6b055cb722'
        let detalle = document.getElementById('detalle');
        let detallePelicula = location.search;
        let detallePeliculaObjeto = new URLSearchParams(detallePelicula);
        let id = detallePeliculaObjeto.get('idSerie');
        
    //DETALLES PELICULA
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-ES`)
  .then(function (response) {
    return response.json();
  })
  .then(function (peliculaSolicitada) {
    console.log(peliculaSolicitada);

    document.querySelector("div.nombre").innerHTML = peliculaSolicitada.title ;
    document.querySelector("div.sinopsis").innerHTML = peliculaSolicitada.overview  ;
    document.querySelector("div.promedio").innerHTML = `Promedio de votos: ${peliculaSolicitada.vote_average}`;
    document.querySelector("div.imagen img").src = `https://image.tmdb.org/t/p/original${peliculaSolicitada.poster_path}` ;
  })

//FAVORITOS


var recuperoStorage = localStorage.getItem("favoritos");


if (recuperoStorage == null ){

  favoritos=[];
}
else {

  favoritos=JSON.parse(recuperoStorage);
}


if (favoritos.includes(id)){
document.querySelector("button.botonFavoritos").innerHTML="Quitar de favoritos"
}


document.querySelector("button.botonFavoritos").onclick=function(){


if (favoritos.includes(id)==true){

var index=favoritos.indexOf(id)
favoritos.splice(index, 1)
document.querySelector("button.botonFavoritos").innerHTML="Agregar a favoritos"
}
else {

  favoritos.push(id);
document.querySelector("button.botonFavoritos").innerHTML="Quitar de favoritos"
}



var infoParaStorage=JSON.stringify(favoritos);
localStorage.setItem("favoritos", infoParaStorage)
console.log(localStorage);

}
  //REVIEWS
  /*fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=942febef73deb21c3f70ec6b055cb722&language=en-US&page=1`)
  .then(function (response) {
    return response.json();
  })
  .then(function (reviewSolicitada) {
    console.log(reviewSolicitada);

    document.querySelector("section.reviews").innerHTML = reviewSolicitada.results.0.author ;
  }) */
  
  //VIDEO TRAILER
  /*fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIkey}`)
  .then(function (response) {
    return response.json();
    })
  .then(function (peliculaSolicitada) {
    console.log(peliculaSolicitada);
    document.querySelector("div.trailer iframe").src = `https://www.youtube.com/embed/${peliculaSolicitada.results[0].key}`
  })*/


    
    


})