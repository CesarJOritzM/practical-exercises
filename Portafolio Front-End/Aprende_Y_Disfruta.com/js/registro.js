// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  var validar = false;
  
  if (validar == false){ 

    if (formulario.nombres.value.trim().length == 0) {
      document.getElementById("errornombres").innerText ="Campo obligatorio"
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText ="Email Invalido";
    }

    if (formulario.contrasena.value.length < 7){
      document.getElementById("errorContrasena").innerText ="Debe tener al menos 7 caracteres"
    }

    if(formulario.confirmacion.value != formulario.contrasena.value) {
      document.getElementById("errorConfirmacion").innerText ="Constraña no coincide"
      formulario.confirmacion.focus();
    }   

    if(formulario.tipo.value <= 0) {
      document.getElementById("errorTipo").innerText = "Campo obligatorio"
    } 

    if(!formulario.acepto.checked) {
      document.getElementById("errorAcepto").innerText = "Campo obligatorio"
    }
    return false   
  }
  else {
    validar = true
  }
 return validar
} 
