var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Realiza un script que implemente un juego de encontrar un número aleatorio bajo las siguientes 
        //condiciones:
        {
        var aleatorio=parseInt(Math.random()*100);
        var numeroadivinar=0;
        var contadoracertado=0;
        var contadorintentos=0;
        var juegoterminado=" ";
        for(let i=0;i<5;i++){
            numeroadivinar=parseInt(prompt("Introduzca un numero a adivinar: "));
            while(isNaN(numeroadivinar)){
                alert("ERROR, no ha introducido un numero.");
                numeroadivinar=parseInt(prompt("Introduzca un numero a adivinar de nuevo: "));
            }
            if(numeroadivinar!=null){
                if(numeroadivinar==aleatorio){
                    alert("Ha acertado el numero aleatorio!");
                    contadoracertado++;
                    contadorintentos++;
                    var opcion1=confirm("¿Quiere volver a jugar?");
                    if(opcion1==false){
                        alert("SE CANCELO EL JUEGO");
                        juegoterminado="SI";
                        break;
                    }else{
                        juegoterminado="NO";
                    }
                }else{
                    contadorintentos++;
                    if(numeroadivinar>aleatorio){
                        alert("El numero es menor que el introducido.");
                        juegoterminado="NO";
                    }else{
                        alert("El numero es mayor que el introducido.");
                        juegoterminado="NO";
                    }
                }
                if(i==4){
                    alert("HA PERDIDO");
                    var opcion2=confirm("¿Quiere volver a jugar?");
                    if(opcion2==false){
                        alert("SE CANCELO EL JUEGO");
                        juegoterminado="SI";
                        alert("Juego terminado: "+juegoterminado+"\n"+"Número de intentos: "+contadorintentos+"\n"+"Número acertado: "+contadoracertado);
                        break;
                    }else{
                        location.reload();
                        juegoterminado="NO";
                    }
                }
                alert("Juego terminado: "+juegoterminado+"\n"+"Número de intentos: "+contadorintentos+"\n"+"Número acertado: "+contadoracertado);
            }else{
                juegoterminado="SI";
                alert("Juego terminado: "+juegoterminado+"\n"+"Número de intentos: "+contadorintentos+"\n"+"Número acertado: "+contadoracertado);
                break;
            }
        }
        }
        break;
    case 2:
        //2. Crea una aplicación web que pida al usuario un número entero positivo y
        //dibuje triángulos con tantos asteriscos como haya indicado el usuario con el 
        //número introducido. 
        {
        var numero=0;
        numero=parseInt(prompt("Introduzca un numero entero positivo:"));
        //TRIANGULO 1
        for(let i=0;i<numero;i++){
            for(let x=0;x<=i;x++){
                document.write(`* `);
            }
            document.write(`</br>`);
        }
        document.write(`</br>`);
        //TRIANGULO 2
        for(let i=numero;i>=1;i--){
            for(let x=0;x<i;x++){
                document.write(`* `);
            }
            document.write(`</br>`);
        }
        document.write(`</br>`);
        //TRIANGULO 3
        for(let i=1;i<=numero;i++){
            //escribir espacios
            for(let x=1;x<=numero-i;x++){
                document.write("&nbsp");
            }
            //escribir asteriscos
            for(let j=1;j<=i;j++){
                document.write("*");
            }
            document.write("</br>");
        }
        document.write(`</br>`);
        //TRIANGULO 4
        for(let i=numero;i>0;i--){
            //escribir espacios
            for(let x=1;x<=numero-i;x++){
                document.write("&nbsp");
            }
            //escribir asteriscos
            for(let j=0;j<i;j++){
                document.write("*");
            }
            document.write("</br>");
        }
        }
        break;
    case 3:
        //3. Crea una página web que pida al usuario números hasta que el usuario pulse 
        //el botón cancelar. Se debe comprobar si lo que inserta el usuario es un número 
        //o no. Al finalizar se debe mostrarla suma de todos los números introducidos 
        //y en el caso de que se hayan insertado caracteres no numéricos, mostrar 
        //también todos los caracteres que se han introducido.
        {
        var numero;
        var sumanumeros=0;
        var lista="";
        do{
            numero=prompt("Introduzca un numero: ");
            if(isNaN(parseInt(numero))){
                if(numero!=null){
                    lista+=numero;
                }
            }else{
                sumanumeros+=parseInt(numero);
            }
        }while(numero!=null);
        alert("Suma de numeros: "+sumanumeros);
        alert("Otros caracteres: "+lista);
        }
        break;
    case 4:
        //4. Crea una página que muestre los primeros 10000 símbolos de la tabla Unicode. Se mostrará en una tabla 
        //en la que en cada fila se indica el número de código, seguido del carácter de ese código. En cada fila se 
        //mostrarán 10 símbolos.
        {
        let numero=0;
        document.write(`<table id='tabla'>`);
        for(let i=0;i<1000;i++){
            document.write(`<tr id='tabla2'>`);
            for(var j=0;j<10;j++){
                var unicode="&#";
                numero+=1;
                document.write(`<td id='tabla3'>`+`${numero}`+`</td>`);
                unicode+=numero;
                document.write(`<td >`+`${unicode}`+`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        }
        break;
    case 5:
        //5. Crea una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 píxeles. Su posición en 
        //la pantalla será también aleatoria.
        {
        var aleatorio=0;
        for(let i=0;i<2000;i++){
            let red=parseInt(Math.random()*256);
            let green=parseInt(Math.random()*256);
            let blue=parseInt(Math.random()*256);
            let ancho=parseInt(Math.random()*1920);
            let alto=parseInt(Math.random()*1080);
            document.write(`<div id='cuadrado' style="background-color:rgb(${red},${green},${blue}); left: ${ancho}px; top: ${alto}px"></div>`);
        }
        }
        break;
    default:
        alert("ERROR");
        break;
}
