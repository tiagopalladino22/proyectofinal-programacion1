window.addEventListener ('load', function(){
    
    let APIkey = '942febef73deb21c3f70ec6b055cb722'
    let resultados = new URLSearchParams(location.search);
    let id = resultados.get('buscador');
    let foto ="https://image.tmdb.org/t/p/original/"

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${id}&page=1`)
   .then(function (response) {
     return response.json();
   })
   .then(function (resultadosBusqueda) {
     console.log(resultadosBusqueda);
    if (resultadosBusqueda.results.length==0) {
      alert("No se han encontrado resultados para su busqueda")
    } else {


     for (var i = 0; i < resultadosBusqueda.results.length; i++) {
       if (resultadosBusqueda.results[i].poster_path != null) {
         document.querySelector("#resultados").innerHTML += "<li><a href='detalle.html?idSerie="+resultadosBusqueda.results[i].id+"'><img src="+ foto + resultadosBusqueda.results[i].poster_path+" alt=''></a></li>"
       }

   }}

   })
})