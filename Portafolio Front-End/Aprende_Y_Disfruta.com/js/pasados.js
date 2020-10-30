var pasados = [];
var hoy;
var eventos;

$(document).ready(function () {

  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    hoy = resultado.fechaActual;
    eventos = resultado.eventos;
  
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }
    }

    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    var html = ""

    for(var j = 0; j < pasados.length; j++){
      html += `
            <div class="card mb-3">
              <div class="card-body pd-0"> 
                <h3>${pasados[j].nombre}</h3>
                <p>${pasados[j].fecha} ${pasados[j].lugar}</p>
                <p>Descripción: ${pasados[j].descripcion}</p>
                <p>Invitados: ${pasados[j].invitados}</p>
              </div>
            </div>
            `
    }
    document.getElementById("pasados").innerHTML = html

  })
});

