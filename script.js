var elemento_abrir = document.getElementById("abrir");
var elemento_abrir1 = document.getElementById("abrir1");

var elemento_listo = document.getElementById("listo");

var elemento_cruzdecierre = document.getElementById ("cruzdecerrar");
var elemento_cruzdecierre1 = document.getElementById ("cruzdecerrar1");

var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("correo");
const enviar = document.querySelector('#botonenviar');    
const programaseleccionado = document.querySelectorAll('input[name="programa"]');
var input_submit = document.getElementById ("botonenviar");

//abre el popup con el formulario
elemento_abrir.addEventListener ("click", abrirformulario);
function abrirformulario (event) {
    event.preventDefault();
    console.log ("funciona");
    elemento_feedback = document.getElementById ("esconder1");
    elemento_feedback.classList.remove("oculto");
}

elemento_abrir1.addEventListener ("click", abrirformulario);
function abrirformulario (event) {
    event.preventDefault();
    console.log ("funciona");
    elemento_feedback = document.getElementById ("esconder1");
    elemento_feedback.classList.remove("oculto");
}

//cierra el formulario con el botón listo
elemento_listo.addEventListener ("click", cerrarformulario);
function cerrarformulario (event) {
    event.preventDefault();
    elemento_feedback = document.getElementById ("esconder2");
    elemento_feedback.classList.add("oculto");
}

//cierra el popup de formulario con la x
elemento_cruzdecierre.addEventListener ("click", cerrarpopups);
function cerrarpopups (event) {
    event.preventDefault();
    elemento_feedback = document.getElementById ("esconder1");
    elemento_feedback.classList.add("oculto");
}

//cierra el popup de feedback con la x
elemento_cruzdecierre1.addEventListener ("click", cerrarpopups1);
function cerrarpopups1 (event) {
    event.preventDefault();
    elemento_feedback = document.getElementById ("esconder2");
    elemento_feedback.classList.add("oculto");
}


//enviar el form haciendo click en el botón enviar
input_submit.addEventListener ("click", enviarformulario);


function enviarformulario (event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value
    var valor_email = input_email.value

    var nombreplaceholder = document.getElementById ("nombreplaceholder");
    var mailplaceholder = document.getElementById ("emailplaceholder");

    nombreplaceholder.innerHTML = valor_nombre;
    emailplaceholder.innerHTML = valor_email;
  

//hace que los campos de texto sean necesarios
    if (input_nombre.value.trim() === '') {
        alert('Por favor, escribí un nombre');
      } else if (input_email.value.trim() === '') {
        alert('Por favor, escribí un mail');
      } else {

    console.log (valor_nombre);
    console.log (valor_email);

    //obtiene la info de los radio buttons
    let seleccion;
    for (const radioButton of programaseleccionado) {
        if (radioButton.checked) {
          seleccion = radioButton.value;
            break;
        }
    }
    console.log (seleccion);

    //cierra el popup con el formulario y abre el popup con el feedback
    elemento_feedback = document.getElementById ("esconder2");
    elemento_feedback.classList.remove("oculto");

    elemento_feedback = document.getElementById ("esconder1");
    elemento_feedback.classList.add("oculto");
      }
}
