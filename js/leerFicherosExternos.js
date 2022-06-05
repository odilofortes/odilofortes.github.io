function traerDatosExternos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',"https://peliculas-tm.000webhostapp.com/json/peliculas.json",true);

    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            const pelisFavoritas = document.getElementById("info-pelis");
            pelisFavoritas.innerHTML = ``;
            let datos = JSON.parse(this.responseText);
            for(let item of datos){
                pelisFavoritas.innerHTML+=`
                <div class="col-lg-6">
                <div class="services-2 d-flex">
                    <div class="mt-2 mr-3 d-flex justify-content-center align-items-center">
                    </span></div>
                    <div class="text">
                        <h3>${item.name}</h3>
                        <p>Director: ${item.director.name}, Protagonista:  ${item.actor[0].name}.</p>
                    </div>
                </div>
            </div>
            `;
            }
        }
    }
}