// Constantes pantalla videojuego concreto
const presentacionVideojuegoConcreto = document.getElementById("Presentacion-Videojuego-Concreto");
const informacionVideojuego = document.getElementById("Informacion-Videojuego");
var numReviews = 0;
var arrayComentarios;
if(JSON.parse(localStorage.getItem('comentarios')) === null){
	arrayComentarios = [];
}else{
	arrayComentarios = JSON.parse(localStorage.getItem('comentarios'));
}


function contarNumReviews(videojuego, comentario){
	for(let i = 0; i < comentario.length; i++){
		if(videojuego.productId === comentario[i].idVideojuego){
			numReviews++;
		}
	}
	for(let i = 0; i < arrayComentarios.length; i++){
		if(videojuego.productId == arrayComentarios[i].idVideojuego){
			numReviews++;
		}
	}
}
// Función barra del buscador
function BusquedaVideojuegos(){
    const videojuegosItems = document.getElementById("items-videojuegos2");
	const formulario = document.getElementById("formulario");
	const boton = document.getElementById("boton");
	const filtrar = () =>{

        videojuegosItems.innerHTML = ``;
		const texto = formulario.value.toLowerCase();
        for(let videojuego of data){
            let nombre = videojuego.name.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                pintarVideojuegoBuscador(videojuego);
            }
        }

        if(videojuegosItems.innerHTML === ``){
            videojuegosItems.innerHTML += `
            <div class="card" >		
              <div class="card-body">
                <h3>No se han encontrado resultados...</h3>
              </div>
            </div>`;          
        }

	}

	boton.addEventListener('click',filtrar);
    formulario.addEventListener('keyup',filtrar);
    filtrar();

    videojuegosItems.addEventListener("click", e =>{
        if(e.target.classList.contains('btn-dark')){
			let id = e.target.parentElement.querySelector('button').dataset.id;
            cargarVideojuego(data[id - 1], comentarios);
			obtenerComentarios(id);
			pintarComentarios(id);
        }else if(e.target.classList.contains("link-videojuego")){
			let id = e.target.parentElement.querySelector('a').dataset.id;
            cargarVideojuego(data[id - 1], comentarios);
			obtenerComentarios(id);
			pintarComentarios(id);
		}
        e.stopPropagation();
    })
   

}

const pintarVideojuegoBuscador = videojuego =>{    
	const videojuegos = document.getElementById("items-videojuegos2");
	const templateVideojuego = document.getElementById("template-videogame").content;
    templateVideojuego.querySelector("a").textContent = videojuego.name;
    templateVideojuego.querySelector("img").setAttribute("src", videojuego.image);
    templateVideojuego.getElementById("p1").textContent = `Desarrollador: ${videojuego.manufacturer}`;
    templateVideojuego.querySelector("button").dataset.id = videojuego.productId;
	templateVideojuego.querySelector("a").dataset.id = videojuego.productId;
    if(videojuego.description.length > 150){
        templateVideojuego.getElementById("p2").textContent = `${videojuego.description.substring(0, 150)}...`;
    }else{
        templateVideojuego.getElementById("p2").textContent = videojuego.description;
    }		
    const clone = templateVideojuego.cloneNode(true);
    fragment.appendChild(clone);	
	videojuegos.appendChild(fragment);
}

// ========================================================================================================================
//											MÉTODOS PARA PINTAR VIDEOJUEGO CONCRETO
// ========================================================================================================================

function cargarVideojuego(videojuego, comentario){
	borrarTodo();
	pintarPresentacionVideojuegoConcreto(videojuego.name);
	pintarInformacionVideojuego(videojuego, comentario);
	crearApiYoutube(videojuego.name);
	crearApiTwitter(videojuego.url);
	console.log(videojuego.twitch);
	crearApiTwitch(videojuego.twitch);
    document.getElementById('boton-atras').addEventListener("click",e =>{
        if(e.target.classList.contains('btn-dark')){
            borrarTodo();
            llamarPantallaVideojuegos();
        }
        e.stopPropagation();
    });
}


function pintarPresentacionVideojuegoConcreto(nombreVideojuego){
	presentacionVideojuegoConcreto.innerHTML = `
	<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_1.jpg');">
	<div class="overlay"></div>
	<div class="container">
	  <div class="row no-gutters slider-text align-items-center justify-content-center">
		<div class="col-md-9 text-center">
		  <h1 class="mb-2 bread">${nombreVideojuego.toUpperCase()}</h1>
		</div>
	  </div>
	</div>
  </section>`;
}

function pintarInformacionVideojuego(videojuego, comentario){
	numReviews = 0;
	contarNumReviews(videojuego, comentario);
	let codigo = `
    <div class="container mt-2">
        <button class="btn btn-dark btn-lg" id="boton-atras">ATRÁS</button>
    </div>
	<section class="ftco-section">
		<div class="container">
		<div class="row no-gutters slider-text align-items-center justify-content-center">
			<div class="col-lg-8 justify-content-center">
			  
				<img src="${videojuego.image}" alt="" class="img-fluid d-block mx-auto mb-4 p-3">
			  
			  <p>${videojuego.description}</p>


			  <!----- API YOUTUBE ----->
			  
			  
				<div class="container-flex p-2" id="api-youtube">
				</div>
			  

              <!----- API TWEETS ----->
			  <div class="container-flex p-2" id="api-twitter">
			  </div>

              <!----- API TWITCH ----->
			  <div class="container-flex p-2" id="api-twitch">
			  </div>
			  



  
  
			  <div class="pt-5 mt-5">
				<h3 class="mb-5 h4 font-weight-bold">${numReviews} reviews</h3>

				<ul class="comment-list" id="lista-comentarios">
			`;
			
			for(let i = 0; i < comentario.length; i++){
				if(videojuego.productId === comentario[i].idVideojuego){
					codigo += `
					<li class="comment">
						<div class="vcard bio">
				  			<img src="${comentario[i].imagen}" alt="Image placeholder">
						</div>
						<div class="comment-body">
				  			<h3>${comentario[i].nombre}</h3>
				  		<div class="meta mb-2">${comentario[i].fecha}</div>
				 		 <p>${comentario[i].mensaje}</p>
						</div>
			 		</li>
				`;
				}

			}

			codigo+=`
						</ul>
						
						<div class="comment-form-wrap pt-5">
						<h3 class="mb-5 h4 font-weight-bold">Deja tu comentario</h3>

						<form class="p-5 bg-light" id="formulario">
                            <div class="form-group">
                                <label for="name">Nombre *</label>
                                <input type="text" class="form-control" id="nombreComentario">
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" class="form-control" id="emailComentario">
                            </div>
                            <div class="form-group">
                                <label for="message">Mensaje</label>
                                <textarea name="" id="mensajeComentario" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
								<button id="botonComentario" type="button" class="btn py-3 px-4 btn-primary">Enviar</button>
                            </div>
                        </form>


						</div>
					</div>
					</div> 
		
					</div><!-- END COL -->
				</div>
					</div>
			</section>`;

	informacionVideojuego.innerHTML = codigo;
}



function obtenerComentarios(idVid){
	const formulario = document.getElementById("formulario");
	const botonComentario = document.getElementById("botonComentario");
	botonComentario.addEventListener("click",(e)=>{
		e.preventDefault(); // Para que no refresque el sitio web
		let nombreComentario = document.getElementById("nombreComentario").value;
		let mensajeComentario = document.getElementById("mensajeComentario").value;
    	
		var nuevoComent = crearComentarios(nombreComentario, mensajeComentario, idVid);
		guardarComentario();
		pintarNuevoComentario(nuevoComent);
		formulario.reset();
	});

	
}
const guardarComentario = () =>{
    localStorage.setItem('comentarios', JSON.stringify(arrayComentarios));
}
const crearComentarios = (nombre, mensaje, idVideojuego) =>{
	var fechaComentario = new Date();
	var fechaFinal = `${fechaComentario.getDate()}/${fechaComentario.getMonth()}/${fechaComentario.getFullYear()}`;
	let itemComentario = {
		nombre: nombre,
		mensaje: mensaje,
		imagen: "https://ih1.redbubble.net/image.2570001112.9345/flat,750x1000,075,f.jpg", // Imagen por defecto
		idVideojuego: idVideojuego,
		fecha: fechaFinal,
	}
	arrayComentarios.push(itemComentario);
	return itemComentario;
}

function pintarNuevoComentario(nuevoComentario){
	const listaComentarios = document.getElementById("lista-comentarios");
	listaComentarios.innerHTML += `
				<li class="comment">
					<div class="vcard bio">
						<img src="${nuevoComentario.imagen}" alt="Image placeholder">
					</div>
					<div class="comment-body">
						<h3>${nuevoComentario.nombre}</h3>
					<div class="meta mb-2">${nuevoComentario.fecha}</div>
						<p>${nuevoComentario.mensaje}</p>
					</div>
				</li>`;
}

const pintarComentarios = (id) =>{
	const listaComentarios = document.getElementById("lista-comentarios");
	if(arrayComentarios ===  null){
		arrayComentarios = [];
	}else{
		
		arrayComentarios.forEach(element =>{
			if(element.idVideojuego === id){
				listaComentarios.innerHTML += `
				<li class="comment">
					<div class="vcard bio">
						<img src="${element.imagen}" alt="Image placeholder">
					</div>
					<div class="comment-body">
						<h3>${element.nombre}</h3>
					<div class="meta mb-2">${element.fecha}</div>
						<p>${element.mensaje}</p>
					</div>
				</li>`;
			}
		})
		
	}

	
}





// para lo de la web semántica
function webSemantica(videojuego){
	for (let i = 0; i < videojuego.length; i++) {
	  let s ={
		  "@context": "https://schema.org",
		  "@type": "Videogames",
		  "name": videojuego[i].name,
		  "image": videojuego[i].image,
		  "description": videojuego[i].description,
		  "manufacturer": videojuego[i].manufacturer,
		  "color": videojuego[i].color,
    	  "audience": videojuego[i].audience,
    	  "award": videojuego[i].award,
		  "geo.region": "ES-PM",
		  "geo.placename": "Universitat de les Illes Balears",
		  "DC.language": "es",
		  "releaseDate": videojuego[i].releaseDate,
		  "countryOfOrigin": videojuego[i].countryOfOrigin,
		};
		document.getElementById("Web-Semantica").innerHTML += JSON.stringify(s);
	}
  
  }