/*EJERCICIOS PRACTICOS TEMA 3*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea una función que muestre números de la serie de Fibonacci. La función recibirá como parámetro el 
        //número de elementos de la serie que queremos que muestre. Este dato se lo solicitaremos al usuario. 
        //Debes crear dos funciones para resolver este problema, una recursiva y otra iterativa.
        {
        var numerostotales;
        numerostotales=parseInt(prompt("Introduce numeros de elementos de la serie que quieres mostrar"));
        //Funcion recursiva
        function calcularfibonnaccirecursiva(x){
            if(x==0){
                return 0;
            }else if(x==1){
                return 1;
            }else return calcularfibonnaccirecursiva(x-1)+calcularfibonnaccirecursiva(x-2);
        }
        document.write("<div>El numero de la posicion "+numerostotales+" con una funcion recursiva es: "+calcularfibonnaccirecursiva(numerostotales)+"</div>");
        //Funcion iterativa
        function calcularfibonnaciiterativa(i){
            let secuencia=[0,1,1];
            if(i<3) return 1;
            for(let j=1;j<i;j++){
                secuencia.push(secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]);
            }
            return secuencia[i];
        }
        document.write("<div>El numero de la posicion "+numerostotales+" con una funcion iterativa es: "+calcularfibonnaciiterativa(numerostotales)+"</div>");
        }
        break;
    case 2:
        //2. Crea una función que reciba un array de palabras. la función devolverá un mapa que contenga como 
        //clave cada palabra y el valor es el número de veces que esa palabra aparece en el array. Haremos una 
        //página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y mostraremos las 
        //repeticiones de las palabras.
        const arraypalabras = new Array();

        var palabra=prompt("Introduzca palabra: ");
        while(palabra!=null && palabra!=""){
            arraypalabras.push(palabra);
            palabra=prompt("Introduzca palabra: ");
        }

        function palabras(arraypalabras){
            if(arraypalabras instanceof Array==true){
                const mapapalabras=new Map();
                for(variable of arraypalabras){
                    if(mapapalabras.get(variable)!=undefined){
                        mapapalabras.set(variable,mapapalabras.get(variable)+1);
                    }else{
                        mapapalabras.set(variable,1);
                    }
                }
                return mapapalabras;
            }else{
                document.write("El array esta vacio.");
                return null;
            }
        }

        var recorrermapa=palabras(arraypalabras);
        recorrermapa.forEach((clave,valor)=>{
            return document.write("Palabra <strong>" + valor + "</strong>, <strong>" + clave + "</strong> repeticiones"+"<br>");
        });
        break;
    case 3:
        //3. Crear una aplicación web que muestre un mapa del popular juego buscaminas en el que aparezcan las 
        //minas dibujadas y también que se indique en las Casillas sin minas, las minas que hay alrededor. Hacerlo 
        //de forma modular de manera que dividamos la aplicación en una serie de funciones. Concretamente 
        //recomendaremos:
        //a. Una función a la que le pasaremos el tablero buscaminas (sería un array de 2 dimensiones) y 
        //coloque en él de manera aleatoria las minas. Esta podría dividirse en dos, siendo una más 
        //sencilla la que recibe el array del tablero, una posición en el y devuelve las minas alrededor 
        //de esa posición. La función principal simplemente invoca a esa segunda recorriendo cada 
        //casilla.
        //b. Otra función que recorra el tablero marcando en cada casilla las minas que hay alrededor.
        //c. Finalmente, una tercera función que dibuje el tablero en una página web.
        //Se pedirá al usuario el tamaño del tablero y las minas a colocar.
        {
        const HAY_MINA = 10;
        //Funcion que me permite colocar las minas
        function colocarminas(buscaminas, filas, columnas, minas){
            for(let cont=1;cont<=minas;cont++){
                let fila,columna;
                do{
                    //Calculo la posicion aleatoria de la mina
                    fila=parseInt(Math.random()*filas);
                    columna=parseInt(Math.random()*columnas);
                }while(buscaminas[fila][columna]==HAY_MINA);
                //Coloco la mina
                buscaminas[fila][columna]=HAY_MINA;
            }
        }

        //Funcion que me permite colocar los numeros en las celdas
        function colocarNumerosCelda(buscaminas, fila, columna){
            let contador = 0;
            if(buscaminas[fila][columna] != HAY_MINA){
                if(columna > 0){
                    if(fila > 0){
                        if(buscaminas[fila - 1][columna - 1] == HAY_MINA){
                            contador++;
                        }
                    }
                    if(buscaminas[fila][columna - 1] == HAY_MINA){
                        contador++;
                    }
                    if(fila<buscaminas.length - 1){
                        if(buscaminas[fila + 1][columna - 1] == HAY_MINA){
                            contador++;
                        }
                    }
                }
                if(columna<buscaminas[fila].length){
                    if(fila > 0){
                        if(buscaminas[fila - 1][columna + 1] == HAY_MINA){
                            contador++;
                        }
                    }
                    if(buscaminas[fila][columna + 1] == HAY_MINA){
                        contador++;
                    }
                    if(fila<buscaminas.length - 1){
                        if(buscaminas[fila + 1][columna + 1] == HAY_MINA){
                            contador++;
                        }
                    }
                }
                if(fila > 0){
                    if(buscaminas[fila - 1][columna] == HAY_MINA){
                        contador++;
                    }
                    if(fila<buscaminas.length - 1){
                        if(buscaminas[fila][columna + 1] == HAY_MINA){
                            contador++;
                        }
                    }
                    buscaminas[fila][columna] = contador;
                }
            }
        }

        
        function colocarNumeros(buscaminas, filas, columnas){
            //Recorro las celdas
            for(let i=0;i<filas;i++){
                for(let j=0;j<columnas;j++){
                    colocarNumerosCelda(buscaminas,i,j);
                }
            }
        }

        //Funcion que me permite crear el tablero
        function crearTablero(filas=9, columnas=9, minas=6){
            //Creo el tablero
            let buscaminas = new Array(filas);
            for(let i=0;i<filas;i++){
                buscaminas[i]= new Array(columnas);
            }

            //Inicio a 0 el tablero
            for(let i=0;i<filas;i++){
                for(let j=0;j<columnas;j++){
                    buscaminas[i][j]=0;
                }
            }

            colocarminas(buscaminas, filas, columnas, minas);
            colocarNumeros(buscaminas, filas, columnas);
            return buscaminas;
        }

        //Funcion que me permite dibujar el tablero
        function dibujartablero(buscaminas,filas,columnas){
            for(let i=0;i<filas;i++){
                document.write("<div class='container'>");
                for(let j=0;j<columnas;j++){
                    if(buscaminas[i][j]>0){
                        if(buscaminas[i][j]==HAY_MINA){
                            document.write("<div class='celdaVacia celdaOcupada'>");
                            document.write("MINA");
                            document.write("</div>");
                        }else{
                            document.write("<div class='celdaVacia'>"+buscaminas[i][j]+"</div>");
                        }
                    }else{
                        document.write("<div class='celdaVacia'>");
                        document.write("&nbsp;");
                        document.write("</div>");
                    }
                }
                document.write("</div>");
            }
        }

        var filas = 0;
        var columnas = 0;
        var minas = 0;
        filas = parseInt(prompt("Introduce el ancho: "));
        columnas = parseInt(prompt("Introduce el alto: "));
        minas = parseInt(prompt("Introduce el numero de minas: "));
        dibujartablero(crearTablero(filas, columnas, minas),filas,columnas);

        }
        break;
    default:
        alert("ERROR");
        break;
}
