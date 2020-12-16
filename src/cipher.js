const cipher = {
  encode: (offset, texto) => { //llamando los valores que el usuario ha ingresado

    let textynum = "";//tomando valores que capturamos (indefinidos)
    for (let i = 0; i< texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (65 <= ascii && ascii <= 90) {
        textynum += String.fromCharCode((ascii - 65 + offset) % 26 + 65);
      }
      else if (97 <= ascii && ascii <= 122) { //minusculas
        textynum += String.fromCharCode((ascii - 97 + offset) % 26 + 97)
      }

      //hacer que me arroje un TypeError si el usuario ingresa caracteres diferentes a los definidos
      //expect(() => cipher.encode(null, [])).toThrow(TypeError);
      //expect(() => cipher.decode()).toThrow(TypeError);

      else {
        textynum += texto.charAt(i);
      }
    }
    return textynum; //regresa el mensaje cidificado
  },

  decode: (offsetDescif, textoMensaje) => {

    let textynumDecif = "";
    for (let i = 0; i< textoMensaje.length; i++) {
      let asciiDecif = textoMensaje.charCodeAt(i);
      if (65 <= asciiDecif && asciiDecif <= 90) {
        textynumDecif += String.fromCharCode((asciiDecif + 65 - offsetDescif) % 26 + 65);
      }
      else if (97 <= asciiDecif && asciiDecif <= 122) { //minusculas
        textynumDecif += String.fromCharCode((asciiDecif - 97 - offsetDescif) % 26 + 97); //problema, me regresa a 96, no a 122,
      }

      else {
        textynumDecif += textoMensaje.charAt(i);
      }
    }
    return textynumDecif; //regresa el mensaje cidificado
  },

};



export default cipher;
