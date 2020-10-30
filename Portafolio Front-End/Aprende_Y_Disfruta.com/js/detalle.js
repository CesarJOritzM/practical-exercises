// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //cargando los datos
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //llenando la variable
    eventos = resultado.eventos;

    //obteniendo el id del url
    var id = location.search.match(/id=(\d)*/)[1]
    console.log(id)
    evento = eventos.find(function (element) {
      return element.id == id
    })
    //llenando dinamicamente los eventos
    var html = `
            <div class="card mb-3">
             <div class="card-body pd-0"> 
               <h3>${evento.nombre}</h3>
               <p>${evento.fecha}</p>
               <p>Lugar: ${evento.lugar}</p
               <p>Descripción:${evento.descripcion}</p>
               <p>Costo: ${evento.precio}</p>
               <p>Invitados:  ${evento.invitados}</p>
            </div>
           `
    document.getElementById("evento").innerHTML = html
  });

});
