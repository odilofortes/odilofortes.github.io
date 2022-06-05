function crearApiYoutube(nombreVideojuego){
  var arrayCadenas = nombreVideojuego.split(' ');
  var queryVideojuego = `${arrayCadenas[0]}`;
  for(let i = 1; i < arrayCadenas.length; i++){
    queryVideojuego+=`+${arrayCadenas[i]}`;
  }
  const apiYoutube = document.getElementById("api-youtube");
    var key = "AIzaSyDitjOQ_It7tgbBFA4xeHRn3w-Dg9SLTRU"; // Clave para poder usar la api de youtube
    var query = queryVideojuego;  // HAY QUE CONSTRUIR LA QUERY CON EL ATRIBUTO NAME DEL JSON
    var nResultados = 4; // numero de videos
    // la url se construye sola
    var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&q=" + query + "&type='video'&order=date&part=snippet&maxResults=" + nResultados;
    $.getJSON(url, function (data) {
      for (var k in data.items) {
        // AQUÍ TRATAMOS CADA VÍDEO RECIBIDO.
        // LA IDEA ES POR CADA VÍDEO CREAR UN IFRAME, QUE PERMITE VISUALIZAR EL VIDEO DIRECTAMENTE. ABAJO DEJO 2 MANERAS DE HACERLO
        // (NO SE CUAL ES MEJOR). DE UN IFRAME SOLO HAY QUE VARIAR SU URL, QUE LLEVA EL ID DEL VIDEO AL FINAL. EN LAS INSTRUCCIONES
        // SIN COMENTAR SE VE COMO COGE EL ID DE CADA VIDEO

        //console.log(k, data.items[k]["id"].videoId);

        apiYoutube.innerHTML += `
        <iframe class="p-1" width="49%" height="370" src="https://www.youtube.com/embed/${data.items[k]["id"].videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      }

    });
}


function crearApiTwitter(twitterVideojuego){

  twitter = document.createElement("a");
  twitter.setAttribute("class","twitter-timeline");
  twitter.setAttribute("data-width","95%");
  twitter.setAttribute("data-height","650");
  twitter.setAttribute("href",twitterVideojuego); 
  document.getElementById("api-twitter").appendChild(twitter);

  twS = document.createElement("script");
  twS.setAttribute("async","true");
  twS.setAttribute("src","https://platform.twitter.com/widgets.js");
  twS.setAttribute("charset","utf-8");
  document.getElementById("api-twitter").appendChild(twS);
}

// Hay que pasar como parámetro la URL de la página, sino Twitch no permitirá mostrar ningún stream.
// Para localhost: parent=localhost
// Para nuestra página de hosting: parent=potigames.000webhostapp.com
// Para el proyecto en github: parent=odilofortes.github.io
function crearApiTwitch(twitch_channel){
    
  const apiTwitch = document.getElementById("api-twitch");
  apiTwitch.innerHTML = 
    `<iframe 
      src="https://player.twitch.tv/?channel=${twitch_channel}&parent=odilofortes.github.io" 
      height="600" 
      width="100%" 
      allowfullscreen>
    </iframe>`
  ;

}
