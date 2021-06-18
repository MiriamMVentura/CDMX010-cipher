const cipher = {
  encode: (offset, texto) => {
    if (!offset) {
      throw new TypeError('Tu input es invalido');
    }
    let textynum = '';
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        ascii = ((ascii - 65 + offset) % 26) + 65;
      } else if (ascii >= 97 && ascii <= 122) {
        ascii = ((ascii - 97 + offset) % 26) + 97;
      } else if (ascii >= 48 && ascii <= 57) {
        ascii = ((ascii - 48 + offset) % 10) + 48;
      }
      textynum += String.fromCharCode(ascii);
    }
    return textynum;
  },

  decode: (offsetDescif, textoMensaje) => {
    if (!offsetDescif) {
      throw new TypeError('Tu input es invalido');
    }
    let textynumDecif = '';
    for (let i = 0; i < textoMensaje.length; i++) {
      let asciiDecif = textoMensaje.charCodeAt(i);
      if (asciiDecif >= 65 && asciiDecif <= 90) {
        asciiDecif = ((asciiDecif + 65 - offsetDescif) % 26) + 65;
      } else if (asciiDecif >= 97 && asciiDecif <= 122) {
        asciiDecif = ((asciiDecif + 111 - offsetDescif) % 26) + 97;
      } else if (asciiDecif >= 48 && asciiDecif <= 57) {
        asciiDecif = ((asciiDecif + 52 - offsetDescif) % 10) + 48;
      }
      textynumDecif += String.fromCharCode(asciiDecif);
    }
    return textynumDecif;
  },
};

export default cipher;
