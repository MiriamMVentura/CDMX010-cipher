# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás una aplicación
web que servirá para que el usuario pueda cifrar y descifrar un texto indicando
un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso
(qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de
ejemplo:

* Crear claves seguras para el email.
* Encriptar/cifrar una tarjeta de crédito.
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

## 3. Objetivos de aprendizaje

Trabajando individual aprenderás a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 4. Consideraciones generales

* El equipo de coaches te dará un tiempo sugerido e indicaciones sobre si trabajar
  sola o en equipo. Recuerda que cada una aprende a diferente ritmo.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.

## 5. Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## PRESENTACIÓN
**Iris Cipher** está pensado y diseñado para personas que requieren compartir mensajes de textos de carácter secreto o confidencial.
Al usar **Iris Cipher**, el usuario mantiene seguros sus datos personales; al ser de uso libre esta aplicación, no hay necesidad de registrarse o iniciar sesión de algún tipo.
En pocos pasos, el usuario de **Iris Cipher** podrá escribir un mensaje cifrado listo para compartir a travez de la mensajería de su elección, también podrá descifrar los mensajes cifrados que otro usuario le haya enviado.

### DEMO
Pasos para ejecutar la aplicación
1. Escribe tu mensaje en el primer campo ("ABC...").
2. Escoge un numero de seguridad para cifrar tu mensaje, recuerda compartirlo solo a quien quieras que lea tu mensaje.
3. Pulsa el botón cifrar o descifrar según sea el caso.
4. Tu mensaje esta listo, puedes copiarlo directo a tu portapapeles y compartirlo a quien quieras.

## PROCESO DE DESARROLLO "Iris Cipher"
### Investigación
¿Quiénes son los principales usuarios de producto?

* Personas preocupadas por el uso de sus datos personales al tener que registrarse en una pagina más.
* Público general que requiera mandar mensajes secretos.
* Personas en edad adulta que maneja números de celular, cuentas de correo (personal y/o laboral), cuentas bancarias, números de seguridad social, diversas afiliaciones... que por algún motivo debe compartirlos a través de un mensaje escrito.

¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

* Seguridad y privacidad para comunicarse a traves de mensajes.
* Mantener seguros los datos personales que tenga que compartir por texto.
* Cifrar y descifrar mensajes o textos con rapidez y eficiencia.
* Evitar suscripción o registro para usar la app
* Que pueda copiar el texto cifrado o descifrado para poder compartirlo con solo un botón.

¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

**Iris Cipher** está diseñado de manera que los usuarios no necesitan suscribirse o resgistrarse para comenzar a usar la aplicación.
Al ejegir un numero de seguridad, el usuario esta codificando su mensaje de manera segura. A traves de unos sencillos pasos el obtiene su mensaje cifrado o descifrado con la opción de copiarlo a su portapapeles para compartirlo.
**Iris Cipher** permite cifrar y descifrar letras mayusculas, letras minusculas y numeros, los caracteres escenciales para escribir mensajes y asugurar una correcta información.

### IDEACIÓN
* Esquematizar
Haciendo un prototipo en papel sobre cómo iba a ser el proceso del cifrado y descifrado de un mensaje de texto identifiqué los elementos básicos: Textareas para ingresar texto y para recibir el mensaje cifrado o descifrado, un imput para elegir el número de desplazamiento, también botones de cifrado y descifrado.
Ubicándolos en el espacio según el flujo de las acciones, identifiqué los elementos semánticos en el HTML.


(insertar imagen del primer boceto)


* Procesando la investigación
Tratando de hacer que la app diera menor esfuerzo e inmediatez al usuario busque referencias de aplicaciones similares, encontré similitudes con los de traducción donde integran otras funciones de usabilidad como que el usuario pueda borrar, copiar o/o compartir.
En un segundo prototipo (Wireframe) adecue el diseño incluyendo los de usabilidad para copiar, borrar y compartir.

(Insertar imagen 2do prototipo con colores)

* Iteración
Solicitando Feedback sobre el wireframe maquetado a un usuario que no ha seguido este proyecto, encontré que:
  - Sugerencia de cuidado en la percepción de figuras y fondo.
  -	Alineación y equilibrio armónico de los elementos en el espacio.
  -	Equilibrio armónico de los colores.
  - Le gustaría confirmación para saber que copio a su portapapeles el mensaje final.
  - Colores más calidos y para tono juvenil y amigable.
  - No se percibe muy bien el nombre de la aplicación.

  ### PROTOTIPADO
Tomando en cuenta los comentarios en la iteración, para definir una paleta de color más adecuada pensé en arquetipos de comunicación, el principal fue el de Dioses mensajeros, tomé el de la Diosa "iris" de la mitología griega, se hizo el cambio a una paleta de color más acorde al nombre y tono de la app:
Iris --> arcoiris, iridiscente.

(Insertar imagen final wire frame)

Añadí una sección de Bienvenida para presentar la aplicación y los beneficios de uso.


























