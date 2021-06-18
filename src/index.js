import cipher from './cipher.js';

let areaText = document.getElementById('message');
let numDespl = document.getElementById('displacement');
let btnCif = document.getElementById('btn1');
let btnDescif = document.getElementById('btn2');

btnCif.addEventListener('click', cifrar);
function cifrar() {
  let texto = areaText.value;
  let offset = parseInt(numDespl.value);
  cipher.encode(offset, texto);
  document.getElementById('result').innerHTML = cipher.encode(offset, texto);
}


btnDescif.addEventListener('click', descifrar);
function descifrar() {
  let textoMensaje = areaText.value;
  let offsetDescif = parseInt(numDespl.value);
  cipher.decode(offsetDescif, textoMensaje);
  document.getElementById('result').innerHTML = cipher.decode(
    offsetDescif,
    textoMensaje
  );
}

const elemento = document.querySelector('#result');
document.querySelector('#btn3').addEventListener('click', () => {
  document.querySelector('.mensajecopiado').classList.add('show');
  copyToClipBoard(elemento);
  setTimeout(() => {
    document.querySelector('.mensajecopiado').classList.remove('show');
  }, 1400);
});

function copyToClipBoard() {
  const inputOculto = document.createElement('input');
  inputOculto.setAttribute('value', elemento.innerHTML);
  document.body.appendChild(inputOculto);
  inputOculto.select();
  document.execCommand('copy');
  document.body.removeChild(inputOculto);
}

let btnDelete = document.getElementById('btn4');
btnDelete.addEventListener('click', refrescar);
function refrescar() {
  location.reload();
}

//-- botón empezar
document.getElementById('btn5').addEventListener('click', () => {
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('btn5').style.display = 'none';
  document.getElementById('principal').style.display = 'block';
});
