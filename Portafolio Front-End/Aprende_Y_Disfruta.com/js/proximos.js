var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {
  
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    
    hoy = resultado.fechaActual
    eventos = resultado.eventos

    for (var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha >= hoy){
        proximos.push(eventos[i])
      }
    }
    
    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    }); 

  var html = ""

  for(var j = 0; j < proximos.length; j++){
     html += `
           <div class="card mb-3">
             <div class="card-body pd-0"> 
               <h3><a href="./detalle.html?id=${proximos[j].id}"}">${proximos[j].nombre}</a></h3>
               <p>${proximos[j].fecha} ${proximos[j].lugar}</p>
               <p>Descripción: ${proximos[j].descripcion}</p>
               <p>Invitados: ${proximos[j].invitados}</p>
             </div>
           </div>
           `
   }
  document.getElementById("proximos").innerHTML = html

  })
});
