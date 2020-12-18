const cipher = {

  encode: (offset, texto) => { //llamando los valores que el usuario ha ingresado
    if (!offset){// falsy : undefined | null | 0 | "" | ''
      throw new TypeError("Tu input es invalido")
    }

    let textynum = "";//tomando valores que capturamos (indefinidos)
    for (let i = 0; i< texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        ascii = (ascii - 65 + offset) % 26 + 65;
      }
      else if (ascii >= 97 && ascii <= 122) {  //minusculas
        ascii = (ascii - 97 + offset) % 26 + 97;
      }
      else if (ascii >= 48 && ascii <= 122) { // números
        ascii = (ascii - 48 + offset) % 10 + 48;
      }

      /*else {
        textynum += texto.charAt(i);
      }*/
      textynum += String.fromCharCode(ascii);
    }
    return textynum; //regresa el mensaje cidificado
  },

  decode: (offsetDescif, textoMensaje) => {
    if (!offsetDescif){
      throw new TypeError("Tu input es invalido")
    }
    let textynumDecif = "";
    for (let i = 0; i< textoMensaje.length; i++) {
      let asciiDecif = textoMensaje.charCodeAt(i);
      if (asciiDecif >= 65 && asciiDecif <= 90) {
        asciiDecif = (asciiDecif + 65 - offsetDescif) % 26 + 65;
      }
      /*else if (asciiDecif >= 97 && asciiDecif <= 122) {// problema - regresa a posicion ascii 96, a no regresa z
        asciiDecif = (asciiDecif - 97 - offsetDescif) % 26 + 97;
      }
      else if (asciiDecif >= 48 && asciiDecif <= 122) { // problema - regresa posicicion ascii 47, 0 no regresa a 9
        asciiDecif = ((asciiDecif - 48 - offsetDescif) % 10 )+ 48;
      }*/

      textynumDecif += String.fromCharCode(asciiDecif);
    }
    return textynumDecif; //regresa el mensaje cidificado
  },

};

export default cipher;
