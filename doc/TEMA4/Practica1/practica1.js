/*EJERCICIOS PRACTICOS TEMA 3*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea una página que pida al usuario un texto y una clave numérica y cifre el texto con la clave pasada. 
        //Para ello se deberá desplazar el código de cada carácter tantas posiciones como nos indique la clave. Por 
        //ejemplo, texto: “Alberto”, clave: “2”, texto cifrado: “Cndgtvq”.
        {
            var texto = prompt("Introduzca un texto");
            var clavenumerica = parseInt(prompt("Introduzca una clave numerica: "));
            var textocifrado = " ";
            for(let i=0;i<texto.length;i++){
                var primeraposicion = texto.charCodeAt(i);
                var sumaclave = primeraposicion+clavenumerica;
                textocifrado = textocifrado + String.fromCharCode(sumaclave);
            }
            console.log(textocifrado);
        }
        break;
    case 2:
        //2. Crea una función para detectar palíndromos. La función recibirá un texto y devolverá verdadero o falso 
        //en función de si el texto es o no es palíndromo. Hay que tener en cuenta que se deben ignorar los signos 
        //de puntuación, espacios, interrogaciones, paréntesis, etc., también se ignoran tildes y diéresis y no se 
        //distingue entre mayúsculas y minúsculas.
        {
            var texto = prompt("Introduzca una palabra: ");
            function detectarpalindromos(texto){
                var espalindroma = false;
                texto.trim();

                //Quito los acentos
                var textoR="";
                do{
                    textoR=texto;
                    texto.replace("á","a");
                    texto.replace("é","e");
                    texto.replace("í","i");
                    texto.replace("ó","o");
                    texto.replace("ú","u");
                    texto.replace("à","a");
                    texto.replace("è","e");
                    texto.replace("ì","i");
                    texto.replace("ò","o");
                    texto.replace("ù","u");
                    texto.replace("ü","u");
                }while(texto!=textoR);
                texto=textoR;

                //Lo paso a minusculas
                texto=texto.toLocaleLowerCase();

                //Compruebo que no hay simbolos, espacios en blanco, interrogaciones, etc...
                var textomodificado = "";
                for(let i=0;i<texto.length;i++){
                    if((texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=122)){
                        textomodificado+=texto.charAt(i);
                    }
                }

                //Le doy la vuelta a el texto y lo introduzco en otra variable
                var textopalindromo = "";
                for(let i=textomodificado.length;i>=0;i--){
                    textopalindromo+=textomodificado.charAt(i);
                }

                //Compruebo si son iguales
                if(textomodificado==textopalindromo){
                    espalindroma=true;
                }else{
                    espalindroma=false;
                }
                return espalindroma;
            }
            console.log(detectarpalindromos(texto));
        }
        break;
    case 3:
        //3. Crea una función para detectar anagramas. Un anagrama es una palabra que resulta de transponer las 
        //letras de otra, por ejemplo: “SENTIDO” y “DESTINO”. La función recibirá como mínimo dos palabras, 
        //aunque puede recibir más y devolverá verdadero o falso en función de si las palabras son anagramas de 
        //las mismas letras.
        {
            var conjuntoPalabras = [];
            var texto = prompt("Introduzca una palabra: ");
            while(texto != null){
                conjuntoPalabras.push(texto);
                texto = prompt("Introduzca una palabra: ");
            }

            
            function detectaranagrama(conjuntoPalabras){
                var esanagrama = false;
                for(let i=0;i<conjuntoPalabras.length;i++){
                    let arraypalabra = [];
                    arraypalabra = conjuntoPalabras[i].split("");
                    arraypalabra.sort();
                    conjuntoPalabras[i] = arraypalabra.join();
                }

                var palabra1 = "";
                var palabra2 = "";
                var esanagrama = false;
                for(let i=0;i<conjuntoPalabras.length-1;i++){
                    palabra1 = conjuntoPalabras[i];
                    palabra2 = conjuntoPalabras[i+1];
                    if(palabra1==palabra2){
                        esanagrama = true;
                    }else{
                        esanagrama = false;
                        break;
                    }
                }

                return esanagrama;
            }

            console.log(detectaranagrama(conjuntoPalabras));
        }
        break;
    default:
        alert("ERROR");
        break;
}

//Funcion quitar acentos
function quitaracentos(texto){
    var textoR="";
    do{
        texto=textoR;
        texto.replace("á","a");
        texto.replace("é","e");
        texto.replace("í","i");
        texto.replace("ó","o");
        texto.replace("ú","u");
        texto.replace("à","a");
        texto.replace("è","e");
        texto.replace("ì","i");
        texto.replace("ò","o");
        texto.replace("ù","u");
        texto.replace("ü","u");
    }while(texto!=textoR);
    texto=textoR;
}
