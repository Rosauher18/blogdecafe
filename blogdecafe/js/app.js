// querySelector

// const heading = document.querySelector('.header__texto h2')
// console.log(heading);

// heading.classList.add('Nueva--clase');
// heading.classList.remove('Nueva--clase');

// querySelectorAll

// const clase = document.querySelectorAll('.navegacion a')
// console.log(clase[1])

//Generar codigo html con js
// const nuevoEnlace = document.createElement('A');

// //Añadiendole href
// nuevoEnlace.href = 'nuevoEnlace-.html';

// //Añadiendo el texto
// nuevoEnlace.textContent = 'Tienda Virtual';

// //Añadiendo la clase
// nuevoEnlace.classList = 'navegacion__enlace';

// const enlace2 = document.createElement('A');
// enlace2.href = 'pago.html';
// enlace2.classList.add('navegacion__enlace');
// enlace2.textContent = 'Metodos de pagos';

// //Añadiendolo al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);
// navegacion.appendChild(enlace2);


//Eventos 
// console.log(1);

// window.addEventListener('load', function(){ //Espera a que carguen todos los documentos para usar la linea de codigo
//     console.log(2);
// })
// document.addEventListener('DOMContentLoaded', function(){ //Espera a que solo cargue el documento html
//     console.log(3);
// })

// console.log(4);

// if(window.onclick == true){
//     console.log('Se ha hecho click')
// }

//Seleccionar un elemento y asociales un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault();
// })

//Eventos del teclado

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

function leerDatos(evento){
    datos[evento.target.id] = evento.target.value;

    // console.log(datos);
}

//Evento sudmit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario
    const {nombre,email,mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios.', true)
        return;
    }

    //Mostrando que se envio correctamente los datos
    mostrarAlerta('Todos los datos se enviaron correctamente');

})

function mostrarAlerta(mensaje, error = null){

    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if( error ){
        alerta.classList.add('error');
    } else{
        alerta.classList.add('alerta');
    }

    formulario.appendChild(alerta);
    
    //Eliminando el error despues de 5 sg
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}