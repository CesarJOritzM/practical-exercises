function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
      console.log(errores)
    }
  }
  
function validar(formulario) {

    limpiarErrores();

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText ="Email Invalido";
        formulario.email.focus();
      return false;
    }

    if (formulario.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText ="No debe estar vacia"
        formulario.contrasena.focus();
        return false;
    }

    if (formulario.contrasena.value.trim().length <= 8) {
        document.getElementById("errorContrasena").innerText ="Debe tener mas de 8 caracteres"
        formulario.contrasena.focus();
        return false;
    }

    if(formulario.confirmacion.value != formulario.contrasena.value) {
        document.getElementById("errorCofirmacion").innerText ="Constraña no coincide"
        formulario.confirmacion.focus();
        return false;
    } 

    if(formulario.genero.value == "") {
        document.getElementById("errorGenero").innerText = "Obligatorio"
        return false;
    }

    if(formulario.edad.value == "") {
        document.getElementById("errorEdad").innerText = "Obligatorio"
        formulario.pais.focus();
        return false;
    }

    if(!formulario.terminos.checked) {
        document.getElementById("errorTerminos").innerText = "Obligatorio"
        formulario.terminos.focus();
        return false
    }
    alert("Datos enviados");
  
    return true;
  }

