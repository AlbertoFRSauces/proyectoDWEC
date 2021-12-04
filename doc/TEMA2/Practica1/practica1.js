var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea una página web que muestre un color de fondo aleatorio cada vez que entremos en ella.
        {
        let red=parseInt(Math.random()*256);
        let green=parseInt(Math.random()*256);
        let blue=parseInt(Math.random()*256);

        document.write(`<div id='fondo' style='background-color:rgb(${red},${green},${blue})'></div>`);
        }
        break;
    case 2:
        //2. Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, es un número 
        //o no, y si es un número, decir si es par o no y si es primo o no.
        {
        let numero=prompt("Introduce un numero","");
        if(numero/1==numero){
            alert("Ha introducido un numero.");
            if(numero%2==0){
                alert("Es par.");
            }else{
                alert("Es impar.");
            }
            
            let esprimo=true;
            if(numero==0 | numero==1 | numero==4){
                esprimo=false;
            }else{
                for(let i=2;i<numero/2;i++){
                    if(numero%i==0){
                        esprimo=false;
                        break;
                    }
                }
            }
            if(esprimo==true){
                alert("Es primo.");
            }else{
                alert("No es primo.");
            }

        }else{
            alert("No ha introducido un numero.");
        }
        }
        break;
    case 3:
        //3. Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla finalmente información 
        //de cada persona en un único mensaje.
        {
        var edad;
        var sexo;
        var lista="";
        for(let i=0;i<10;i++){
            var edad=prompt("Introduzca su edad:","");
            var sexo=prompt("Introduzca el sexo:","");
            lista=lista+"Sexo: "+sexo+","+" Edad: "+edad+"\n";
        }
        alert(lista);
        }
        break;
    case 4:
        //4. Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe 
        //mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca 
        //números y no cualquier otro carácter.
        {
        var contador=0;
        var acumulador=0;

        do{
            var num=parseInt(prompt("Introduce un numero entero:"));
            if(isNaN(num)){
                alert("No es un numero.");
            }else{
                acumulador+=num;
                contador++;
                var maximo=num;
                var minimo=num;
            }
        }while(isNaN(num));

        if(num==0){
            alert("No se ha podido calcular nada.")
        }else{
            while(num!=0){
                var num=parseInt(prompt("Introduce un numero entero:"));
                if(isNaN(num)){
                    alert("No es un numero.");
                }else{
                    acumulador+=num;
                    if(num==0){
                        break;
                    }else{
                        contador++;
                        if(num>maximo){
                            maximo=num;
                        }
                        if(num<minimo){
                            minimo=num;
                        }
                    }
                }
            }
        }
        alert("Maximo: "+maximo+" Minimo: "+minimo+" Media: "+acumulador/contador);
        }
        break;
    case 5:
        //5. Crea un script que permita validar una clave introducida por el usuario y tenga 3 intentos para 
        //introducirla bien. Si no la introduce bien, le da error y se sale del programa. La clave debe ser un 
        //número de 6 dígitos
        {
        var clave=prompt("Introduzca una clave(de 6 digitos): ");
        if(isNaN(clave)){
            alert("La clave no contiene digitos.");
        }else{
            for(let i=0;i<3;i++){
                var clavevalida=prompt("Introduzca una clave a validar(maximo 3 intentos): ");
                if(isNaN(clavevalida)){
                    alert("La clave no contiene digitos.");
                }else{
                    if(clavevalida==clave){
                        alert("La clave introducida es correcta.");
                        break;
                    }else{
                        alert("ERROR La clave introducida no es correcta.");ç
                        break;
                    }
                }
            }
            alert("Ya no quedan mas intentos.");
        }
        }
        break;
    case 6:
        //6. Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá que introducir 
        //el número de alumnos que va a gestionar el script.
        //La nota final de cada alumno se calcula según el siguiente criterio: 
        //      a. Parte práctica 40%
        //      b. Parte teórica 30%
        //      c. Actitud 10%
        //El script leerá el nombre del alumno y su número de expediente y las notas obtenidas en cada parte. 
        //Finalmente mostrará el resultado de todos los alumnos y una media de la nota final y una media de 
        //cada parte.
        {
        var numalumnos=parseInt(prompt("Introduce el numero de alumnos a gestionar: "));
        var lista=" ";
        var acumuladorfinal=0;
        for(let i=1;i<=numalumnos;i++){
            var nombrealumno=prompt("Introduzca el nombre del alumno: ");
            var numexpendiente=prompt("Introduzca el numero de expediente del alumno: ");
            var notaspractica=parseInt(prompt("Introduzca la nota de la practica del alumno: "));
            var notasteorica=parseInt(prompt("Introduzca la nota de la teorica alumno: "));
            var notasactitud=parseInt(prompt("Introduzca la nota de la actitud alumno: "));
            notaspractica*=0.4
            notasteorica*=0.3
            notasactitud*=0.1
            var mediacadaparte=(notaspractica+notasteorica+notasactitud)/3;
            acumuladorfinal+=mediacadaparte;
            lista+=nombrealumno+", "+numexpendiente+" Media de cada parte: "+mediacadaparte+"\n";
        }
        alert(lista);
        alert("Media final: "+acumuladorfinal/numalumnos);
        }
        break;
    case 7:
        //7. Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al 
        //usuario. El segundo número tiene que ser mayor o igual que el primer número.
        {
        var numero1=parseInt(prompt("Introduzca el primer numero: "));
        var numero2=parseInt(prompt("Introduzca el segundo numero: "));
        var cadena="";
        while(numero1>numero2){
            numero2=parseInt(prompt("El segundo numero tiene que ser mayor que el primero: "));
        }
        for(let i=numero1;i<=numero2;i++){
            if(i%2==0){
                cadena+=i+" ";
            }
        }
        alert(cadena);
        }
        break;
    case 8:
        //8. Escribe un script que calcule la suma de los números pares y los números impares de los números
        //comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta. 
        {
        var pares=0;
        var impares=0;
        for(let i=1;i<100;i++){
            if(i%2==0){
                pares+=i;
            }else{
                impares+=i;
            }
        }
        alert("Impares: "+impares+" Pares: "+pares);
        }
        break;
    case 9:
        //9. Escribe un script que calcule la suma de los números pares y la suma de los números impares 
        //comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el 
        //45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro 
        //lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se 
        //tienen en cuenta.
        {
        var pares=0;
        var impares=0;
        var primernumero=parseInt(prompt("Introduce el primer numero: "));
        var segundonumero=parseInt(prompt("Introduce el segundo numero: "));
        for(let i=primernumero+1;i<segundonumero;i++){
            if(i%2==0){
                pares+=i;
            }else{
                impares+=i;
            }
        }
        alert("Pares: "+pares+" Impares: "+impares);
        }
        break;
    case 10:
        {
        //10.Factorial de un numero pedido por teclado.
        var numero=parseInt(prompt("Introduzca un numero por teclado positivo menor que 100:"));
        acumulador=1;
        while(isNaN(numero) || numero<1 ||numero>100){
            numero=parseInt(prompt("No ha introducido un numero por teclado positivo menor que 100, introduzcalo:"));
        }
        for(let i=numero;i>1;i--){
            acumulador=acumulador*i;
        }
        alert("El factorial de "+numero+" es: "+acumulador);
        }
        break;
    default: 
        alert("ERROR");
        break;
}