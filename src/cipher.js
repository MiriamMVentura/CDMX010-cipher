const cipher = {
  encode: (offset, texto) => { //llamando los valores que el usuario ha ingresado
    let textynum = "";//tomando valores que capturamos (indefinidos)
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (65 <= ascii && ascii <= 90) {
        textynum += String.fromCharCode((ascii - 65 + offset) % 26 + 65);
      }
      else if (97 <= ascii && ascii <= 122) { //minusculas
        textynum += String.fromCharCode((ascii - 97 + offset) % 26 + 97)
      }
      //hacer que me arroje un TypeError si el usuario ingresa caracteres diferentes a los definidos
      //expect(() => cipher.encode(null, [])).toThrow(TypeError);
      /*else if (texto === null || offset === 0) {
        throw TypeError("error");
      }*/
      else {
        textynum += texto.charAt(i);
      }
    }
    return textynum; //regresa el mensaje cidificado
  },

  decode: (offset, texto) => {
    let textynum = "";
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (65 <= ascii && ascii <= 90) {
        textynum += String.fromCharCode((ascii + 65 - offset) % 26 + 65);
      }
      else if (97 <= ascii && ascii <= 122) { //minusculas
        textynum += String.fromCharCode((ascii + 97 - offset) % 26 + 97); //problema----
      }
      else {
        textynum += texto.charAt(i);
      }
    }
    return textynum; //regresa el mensaje cidificado
  },

};



export default cipher;
