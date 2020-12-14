import cipher from './cipher.js';

//console.log(cipher);

//declarando variables segun los elementos html que tengo//
let areaText = document.getElementById('message'); //espacio donde se ingresa texto
let numDespl= document.getElementById('displacement');// input donde se escoge # desplazamiento
let btnCif = document.getElementById('btn1'); //botón para cifrar
let btnDescif = document.getElementById('btn2');//botón para descifrar
//let areaResult = document.getElementById('result'); //espacio donde mostrara el texto cifrado/descifrado
let btnDelete  = document.getElementById('btn3');//boton para limpiar espacios de texto
//let btnCopy = document.getElementById('btn4'); // botón para copiar mensaje

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
  let texto = areaText.value; //captura el valor de los caracteres espacio dondese ingresa texto
  //console.log(texto); //verificación de captura
  let offset = parseInt(numDespl.value);//captura el valor del # de desplazamiento elegido por el usuario con base decimal
  //console.log(numDespl); //verificación de captura
  cipher.decode(offset, texto); //mandar los valores capturados a la función con formula en archivo cipher.js
  document.getElementById('result').innerHTML = cipher.decode(offset, texto);// resultante de "decode" se muestre en textarea
}
btnDelete.addEventListener('click', eliminar); //haciendo click ejecutara la función eliminar
function eliminar (){
}

btnDelete.addEventListener('click', copiar); //haciendo click ejecutara la función eliminar
function copiar (){

}

