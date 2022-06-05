// Constante para el video
const videoInicio = document.getElementById("Video");
// Constantes pantalla Videojuegos
const presentacionVideojuegos = document.getElementById("Presentacion-Videojuegos");
const listaVideojuegos = document.getElementById("Lista-Videojuegos");

// Constantes pantalla Nosotros
const presentacionContacto = document.getElementById("Presentacion-Contacto");
const infoContacto = document.getElementById("Info-Contacto");
const pelisFavoritas = document.getElementById("Pelis-Favoritas");
const integrantes = document.getElementById("Integrantes");
const mapa = document.getElementById("Mapa");

// Para la lectura del JSON
const fragment = document.createDocumentFragment();
var data;
var comentarios;
// Función que se ejecute al cargar la página
document.addEventListener("DOMContentLoaded", () =>{
	fetchdata();
	videoInicial();
});

// Obtenemos los datos de los videojuegos
const fetchdata = async() =>{
	try{
		const res = await fetch("JSON/videojuegos.json");
		data = await res.json();
		webSemantica(data);
		const res2 = await fetch("JSON/comentarios.json");
		comentarios = await res2.json();
	}catch(error){
		console.log(error);
	}
}




const container = document.getElementById("Barra-Navegacion");

container.addEventListener("click",(e)=>{

  if(e.target.classList.contains("Navegar-Videojuegos")){
	borrarTodo();
	llamarPantallaVideojuegos();
	
  }else if(e.target.classList.contains("Navegar-Contacto")){
	  borrarTodo();
	  llamarPantallaContacto()
  }else if(e.target.classList.contains("Navegar-Inicio")){
	  borrarTodo();
	  videoInicial();
  }
  e.stopPropagation();
})

function borrarTodo(){
	presentacionVideojuegos.innerHTML = ``;
	listaVideojuegos.innerHTML = ``;
	presentacionContacto.innerHTML = ``;
	infoContacto.innerHTML = ``;
	integrantes.innerHTML = ``;
	pelisFavoritas.innerHTML = ``;
	videoInicio.innerHTML = ``;
	mapa.innerHTML = ``;
 	document.getElementById("Presentacion-Videojuego-Concreto").innerHTML = ``;
    document.getElementById("Informacion-Videojuego").innerHTML = ``;

}

function llamarPantallaVideojuegos(){
    pintarPresentacionVideojuegos();
	pintarTodosLosVideojuegos(data);
}

function llamarPantallaContacto(){
	pintarPresentacionContacto();
	pintarInfoContacto();
	pintarPelisFavoritas();
	pintarIntegrantes();
	pintarMapa();
}



function videoInicial(){
	videoInicio.innerHTML = `
	<section id="videoBootstrap">
	<div class="overlay"></div>
	<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
		<source src="media/video-videojuegos2.mp4" type="video/mp4">
	</video>

	<div class="container h-100">
	<div class="d-flex h-100 text-center align-items-center">
	<div class="w-100 text-white">
		<img class="img-fluid" src="images/logo-POTIGAMES.png" alt="logo" id="logo-empresa"></img>
	</div>
	</div>
	</div>
	</section>`;
}



// ========================================================================================================================
//											MÉTODOS PARA PINTAR SECCIÓN VIDEOJUEGOS
// ========================================================================================================================



function pintarPresentacionVideojuegos(){
	presentacionVideojuegos.innerHTML = `
	<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_4.jpg');">
	<div class="overlay"></div>
	<div class="container">
	  <div class="row no-gutters slider-text align-items-center justify-content-center">
		<div class="col-md-9 text-center">
		  <h1 class="mb-2 bread">Todos los videojuegos</h1>
		</div>
	  </div>
	</div>
  </section>`;
}

const pintarTodosLosVideojuegos = data =>{
	listaVideojuegos.innerHTML = `
	<section class="ftco-section">
		<div class="container">
		<div class="row justify-content-center mb-5 pb-2">			
			<div class="col-lg-6 sidebar ml-auto">



				<div class="sidebar-box">
				  <form action="#" class="search-form">
					<div class="form-group" id="ctn-bars-search">
						<div class="input-group">
							<div class="form-outline mr-2">
								<input type="search" id="formulario" class="form-control" placeholder="Buscar videojuegos">
							</div>
							<button type="button" id="boton"class="btn btn-info ">Buscar</button>
						</div>
					</div>
				  </form>
				</div>



			 </div> 
		<div class="row" id="items-videojuegos2"></div>
		</div>
	</section>`;
	BusquedaVideojuegos();
}

// ========================================================================================================================
//											MÉTODOS PARA PINTAR SECCIÓN NOSOTROS
// ========================================================================================================================

function pintarPresentacionContacto(){
	presentacionContacto.innerHTML = `
	<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');">
	<audio autoplay loop src="media/the_orb_of_dreamers.mp3" id="videoInicio"></audio>
	<div class="overlay"></div>
	<div class="container">
	  <div class="row no-gutters slider-text align-items-center justify-content-center">
		<div class="col-md-9 text-center">
		  <h1 class="mb-2 bread">Sobre nosotros</h1>
		</div>
	  </div>
	</div>
  </section>`;
}

function pintarInfoContacto(){
	infoContacto.innerHTML = ` <section class="ftco-section ftco-no-pt ftc-no-pb">
	<div class="container">
		<div class="row">
			<div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
				<div class="text px-4 ">
		  			<h2 class="mb-4">Bienvenidos a la página web de PotiGames</h2>
					<p>PotiGames somos una página web española especializada en videojuegos. Nuestros contenidos se estructuran atendiendo a las diferentes plataformas existentes y entre ellos se pueden encontrar valoraciones de juegos, noticias relacionadas con el sector, trucos y consejos, videos de los juegos, entrevistas. </p>
					<p>PotiGames se fundó en Puigpunyent (España), en Marzo de 2019, por Sandu Bizu, Odilo Fortes Domínguez y Maribel Crespí Valero, estudiantes de ingenieria informática.</p>
					<p>Al principio empezó como un pequeño proyecto de la Universitat de les Illes Balears para la asignatura de Tecnología Multimedia, pero poco a poco se fue extendiendo hasta convertirse en la página de culto que es hoy en día.</p>
					<p>A día de hoy contamos con una gran popularidad que nos permite vivir de lo que más nos gusta y todo es gracias a vosotros!</p>
				</div>
			</div>
			<div class="col-md-7 wrap-about py-5 pr-md-4 ">
	 			 <h2 class="mb-4">¿Qué ofrecemos?</h2>
				<p>Queremos que estéis al día de todas las novedades del mundo videojueguil.</p>
				<div class="row mt-5">

					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono1.png" width="50px" height="auto" alt="">
							</div>
							<div class="text">
								<h3>Últimos lanzamientos</h3>
								<p>Videojuegos recientes que te puedan interesar.</p>
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono2.png" width="50px" height="auto" alt="">
							</span></div>
							<div class="text">
								<h3>Videojuegos más populares</h3>
								<p>Los más jugados por la comunidad y por creadores de contenido.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono3.png" width="50px" height="auto" alt="">
							</span></div>
							<div class="text">
								<h3>Videojuegos de culto</h3>
								<p>De antiguas consolas pero con gran relevancia a día de hoy.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono4.png" width="50px" height="auto" alt="">
							</span></div>
							<div class="text">
								<h3>Creadores de contenido</h3>
								<p>Mira los videos relacionados con los vídeojuegos de gente con mucho talento.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono5.png" width="50px" height="auto" alt="">
							</span></div>
							<div class="text">
								<h3>Novedades</h3>
								<p>Los últimos vídeos, tweets o streams de tus vídejuegos favoritos.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="services-2 d-flex">
							<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
								<img src="images/icono6.png" width="50px" height="auto" alt="">
							</span></div>
							<div class="text">
								<h3>Curiosidades</h3>
								<p>Podrás encontrar toda la información que desees.</p>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>
</section>`;
}

function pintarPelisFavoritas(){
	pelisFavoritas.innerHTML = `
	<section class="ftco-section ftco-no-pb">
	<div class="container">
		<div class="row justify-content-center mb-5 pb-2">
			<div class="col-md-8 text-center heading-section heading-section-black ">
			  <h2 class="mb-4"><span>Nuestras pelis</span> Favoritas</h2>
			  <p>Aparte de frikis también somos cinéfilos.</p>
			</div>
			<div class="col-md-7 wrap-about py-5 pr-md-4 ">
				<div class="row mt-5" id="info-pelis">
  </div>
  </div>
</section>
  `;
  traerDatosExternos();
}
function pintarIntegrantes(){
	integrantes.innerHTML = `<section class="ftco-section ftco-no-pb">
	<div class="container">
		<div class="row justify-content-center mb-5 pb-2">
			<div class="col-md-8 text-center heading-section heading-section-black ">
			  <h2 class="mb-4"><span>Integrantes del</span> Equipo</h2>
			  <p>Para que veas nuestras caras.</p>
			</div>
		  </div>	
		<div class="row">
			<div class="col-md-6 col-lg-4 ">
				<div class="staff">
					<div class="img-wrap d-flex align-items-stretch">
						<div class="img align-self-stretch" style="background-image: url(images/perro1.jpg);"></div>
					</div>
					<div class="text pt-3 text-center">
						<h3>Sandu Bizu</h3>
						<span class="position mb-2">Se cree lobo de Wall Street</span>
						<div class="faded">
							<p>HBAR no va a subir.</p>
							<ul class="ftco-social text-center">
				<li ><a href="#"><span class="icon-twitter"></span></a></li>
				<li ><a href="#"><span class="icon-facebook"></span></a></li>
				<li ><a href="#"><span class="icon-google-plus"></span></a></li>
				<li ><a href="#"><span class="icon-instagram"></span></a></li>
			  </ul>
		  </div>
					</div>
				</div>
			</div>
			
			<div class="col-md-6 col-lg-4 ">
				<div class="staff">
					<div class="img-wrap d-flex align-items-stretch">
						<div class="img align-self-stretch" style="background-image: url(images/perro2.jpg);"></div>
					</div>
					<div class="text pt-3 text-center">
						<h3>Odilo Fortes Domínguez</h3>
						<span class="position mb-2">Internet user</span>
						<div class="faded">
							<p>That's me.</p>
							<ul class="ftco-social text-center">
				<li ><a href="#"><span class="icon-twitter"></span></a></li>
				<li ><a href="#"><span class="icon-facebook"></span></a></li>
				<li ><a href="#"><span class="icon-google-plus"></span></a></li>
				<li ><a href="#"><span class="icon-instagram"></span></a></li>
			  </ul>
		  </div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 ">
				<div class="staff">
					<div class="img-wrap d-flex align-items-stretch">
						<div class="img align-self-stretch" style="background-image: url(images/perro3.jpg);"></div>
					</div>
					<div class="text pt-3 text-center">
						<h3>Maribel Crespí Valero</h3>
						<span class="position mb-2">CEO McDonalds</span>
						<div class="faded">
							<p>Manca del baloncesto.</p>
							<ul class="ftco-social text-center">
				<li ><a href="#"><span class="icon-twitter"></span></a></li>
				<li ><a href="#"><span class="icon-facebook"></span></a></li>
				<li ><a href="#"><span class="icon-google-plus"></span></a></li>
				<li ><a href="#"><span class="icon-instagram"></span></a></li>
			  </ul>
		  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>`;
}

function pintarMapa(){
	mapa.innerHTML = `
	<section class="ftco-section ftco-no-pb">
	<div class="container">
		<div class="row justify-content-center mb-5 pb-2">
			<div class="col-md-8 text-center heading-section heading-section-black ">
				<h2 class="mb-4"><span>¿Dónde</span> encontrarnos?</h2>
				<p>Nuestra sede de operaciones se aloja en la Universitat de les Illes Balears, en Mallorca.</p>
				<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
				referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDitjOQ_It7tgbBFA4xeHRn3w-Dg9SLTRU
				&q=Edificio+Anselm+Turmeda">
				</iframe>	
					
			</div>		
			<div 
			    id="openweathermap-widget-2">
			</div>	
		</div>
	</div>
	</section>
	`;
	crearApiTiempo();
}

function crearApiTiempo(){
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push({id: 2, cityid: '6533961', appid: '66d74e479e2abb721be32aefb775dd5c', 
    units: 'metric', containerid: 'openweathermap-widget-2',});
    (function() {var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);  }
    )();
}

