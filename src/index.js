import cipher from './cipher.js';

//console.log(cipher);

//declarando variables segun los elementos html que tengo//
let areaText = document.getElementById('message'); //espacio donde se ingresa texto
let numDespl= document.getElementById('displacement');// input donde se escoge # desplazamiento
let btnCif = document.getElementById('btn1'); //botón para cifrar
let btnDescif = document.getElementById('btn2');//botón para descifrar


//evento DOM: al hacer click en el botón "cifrar" tomará los valores necesarios para ejecutar la función "encode"//
btnCif.addEventListener('click', cifrar); //haciendo click ejecutara la función cifrar
function cifrar(){
  let texto = areaText.value; //captura el valor de los caracteres espacio dondese ingresa texto
  //console.log(texto); //verificación de captura
  let offset = parseInt(numDespl.value);//captura el valor del # de desplazamiento elegido por el usuario con base decimal
  //console.log(numDespl); //verificación de captura
  cipher.encode(offset, texto); // mandar los valores capturados a la función encode (formula) en archivo cipher.js
  document.getElementById('result').innerHTML = cipher.encode(offset, texto);// resultante de "encode" se muestre en textarea
}


//evento DOM: al hacer click en el botón "cifrar" tomará los valores necesarios para ejecutar la función "encode"//
btnDescif.addEventListener('click', descifrar); //boton haciendo click ejecutara la función cifrar
function descifrar(){  //definiendo función descifrar
  let textoMensaje = areaText.value; //captura el valor de los caracteres espacio dondese ingresa texto
  //console.log(texto); //verificación de captura
  let offsetDescif = parseInt(numDespl.value);//captura el valor del # de desplazamiento elegido por el usuario con base decimal
  //console.log(numDespl); //verificación de captura
  cipher.decode(offsetDescif, textoMensaje); //mandar los valores capturados a la función con formula en archivo cipher.js
  document.getElementById('result').innerHTML = cipher.decode(offsetDescif, textoMensaje);// resultante de "decode" se muestre en textarea
}


// agrgando botónes de usabilidad copiar y borrar
//let btnCopy = document.getElementById('btn4'); // botón para copiar mensaje

const elemento = document.querySelector('#result');
document.querySelector('#btn3').addEventListener('click', ()=>{
  document.querySelector('.mensajecopiado').classList.add('show');
  copyToClipBoard(elemento);
  setTimeout(()=>{
    document.querySelector('.mensajecopiado').classList.remove('show');
  },1400)
})

function copyToClipBoard(){
  const inputOculto = document.createElement('input'); //creamos un elemento
  inputOculto.setAttribute('value', elemento.innerHTML);// le añadimos valor a su atributo value
  document.body.appendChild(inputOculto); //agregamos el elemento a nuestro documento
  inputOculto.select();// seleccionar el texto dentro del elemento que es lo que quiero copiar
  document.execCommand('copy'); //lo copiamos
  document.body.removeChild(inputOculto); //removemos el elemento agregado a nuestro documento
}

//agregando botón de refrescar pagina
let btnDelete  = document.getElementById('btn4');//boton para limpiar espacios de texto
btnDelete.addEventListener('click', refrescar);
function refrescar (){
  location.reload();
}

//agregando botón empezar
document.getElementById('btn5').addEventListener('click', () =>{
  document.getElementById('bienvenida').style.display='none';
  document.getElementById('btn5').style.display='none';
  document.getElementById('principal').style.display = 'block';
});

