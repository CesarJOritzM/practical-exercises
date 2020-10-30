var pasados = [];
var proximos =[];
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
    };

    for (var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha >= hoy){
        proximos.push(eventos[i])
      }
    };
    
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    proximos = proximos.sort(function(a,b){
      if (a.fecha > b.fecha){
        return 1;
      }
      return -1;
    });

  var proximoshtml = ""
  var pasadoshtml = ""

  for(var j = 0; j < 2; j++){
    proximoshtml += `
          <div class= "col">
            <div class="card mb-3">
              <div class="card-body pd-0"> 
                <h3><a href="./proximos.html">${proximos[j].nombre}</a></h3>
                <p>${proximos[j].fecha}</p>
                <p>Descripción: ${proximos[j].descripcion}</p>
              </div>
            </div>
          </div>
           `
  }
  for(var j = 0; j < 2; j++){
    pasadoshtml += `
          <div class= "col">
            <div class="card mb-3">
              <div class="card-body pd-0"> 
                <h3><a href="./pasados.html">${pasados[j].nombre}</a></h3>
                <p>${pasados[j].fecha}</p>
                <p>Descripción: ${pasados[j].descripcion}</p>
              </div>
            </div>
          </div>
           `
     }
    document.getElementById("proximos").innerHTML = proximoshtml
    document.getElementById("pasados").innerHTML = pasadoshtml
  })
});
