var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea una aplicación que pida palabras al usuario hasta que pulse el botón cancelar. Después 
        //aparecerá un menú de opciones:
        //1) Ver primera palabra insertada
        //2) Ver última palabra insertada
        //3) Ver todas las palabras
        //4) Ver la palabra más larga
        //5) Ver la palabra más corta
        //6) Número de palabras insertadas
        //7) Buscar una palabra
        //8) Borrar duplicados
        //9) Salir
        {
        var palabras=new Array();
        var palabrasintroducir=prompt("Introduzca palabras:");
        while(palabrasintroducir!=null){
            palabras.push(palabrasintroducir);
            palabrasintroducir=prompt("Introduzca palabras:");
        }
        
        do{
            var opcion=parseInt(prompt("1)Ver primera palabra insertada \n2)Ver última palabra insertada \n3)Ver todas las palabras \n4)Ver la palabra más larga \n5)Ver la palabra más corta \n6)Número de palabras insertadas \n7)Buscar una palabra \n8)Borrar duplicados \n9)Salir \nIntroduzca opcion:"));
            switch(opcion){
                case 1:
                    {
                        alert("La primera palabra insertada es: "+palabras[0]);
                    }
                break;
                case 2:
                    {
                        alert("La primera palabra insertada es: "+palabras[palabras.length-1]);
                    }
                break;
                case 3:
                    {
                        let lista="";
                        for(let i=0;i<palabras.length;i++){
                            lista+=palabras[i]+", ";
                        }
                        alert("Todas las palabras: "+lista);
                    }
                break;
                case 4:
                    {
                    let largo = palabras[0];
                        for(let i=0;i<palabras.length;i++){
                            if(palabras[i].length > largo.length){
                                largo=palabras[i];
                            }
                        }
                    alert("La palabra mas larga es: "+largo);
                    }
                break;
                case 5:
                    {
                        let corta = palabras[0];
                        for(let i=0;i<palabras.length;i++){
                            if(palabras[i].length < corta.length){
                                corta=palabras[i];
                            }
                        }
                    alert("La palabra mas corta es: "+corta);
                    }
                break;
                case 6:
                    {
                        let contador=0;
                        for(let i=0;i<palabras.length;i++){
                            contador++;
                        }
                        alert("Numero de palabras insertadas: "+contador);
                    }
                break;
                case 7:
                    {
                        var palabrabuscar=prompt("Introduzca palabra a buscar: ");
                        if(palabras.indexOf(palabrabuscar)!=-1){
                            alert("Palabra encontrada.");
                        }else{
                            alert("Palabra no encontrada.");
                        }
                    }
                break;
                case 8:
                    {   
                        let lista=palabras.filter((item,index)=>{
                            return palabras.indexOf(item) === index;
                        })
                        alert("Todas las palabras: "+lista);

                        /*
                        var aux=new Array();
                        for(let pal of palabras){
                            let duplicado=false;
                            for(let palaux of aux){
                                if(palaux==pal){
                                    duplicado=true;
                                }
                            }
                            if(!duplicado){
                                aux.push(pal)
                            }
                        }
                        palabras=aux;
                        alert();
                        */
                        
                    }
                break;
            }
        }while(opcion!=9);
        }
        break;
    case 2:
        //2. Crear una aplicación que dibuje en pantalla el tablero del juego hundir la flota. Tiene que dibujar 
        //aleatoriamente en el tablero:
        //1) dos barcos de tamaño cuatro (portaviones)
        //2) tres de tamaño tres (acorazados)
        //3) tres de tamaño dos (destructores)
        //4) dos de tamaño uno (fragatas)
        //El tablero será de 10 por 10. Los barcos no se pueden solapar ni tocar y se pueden dibujar tanto en 
        //horizontal como en vertical.


        //Inicializar tablero
        {
            const TAMANOCOLUMNAS=10;
            const TAMANOFILAS=10;

            const TAMANOPORTAVIONES=4;
            const NUMEROPORTAVIONES=2;
            //const TAMANOACORAZADOS=3;
            //const NUMEROACORAZADOS=3;
            //const TAMANODESTRUCTORES=2;
            //const NUMERODESTRUCTORES=3;
            //const TAMANOFRAGATAS=1;
            //const NUMEROFRAGATAS=2;

            //Definir array tablero
            var tablero=new Array(TAMANOFILAS);

            //Poner a false las posiciones del tablero
            for(let i=0;i<TAMANOFILAS;i++){
                tablero[i]=new Array(TAMANOCOLUMNAS);
                for(let j=0;j<TAMANOCOLUMNAS;j++){
                    tablero[i][j]=false;
                }
            }
            
            var ocupada=false;
            var contador1=0;
            while(contador1<NUMEROPORTAVIONES){
                let horizontal=parseInt(Math.random()*2);
                if(horizontal){
                    var fila=parseInt(Math.random()*10);
                    var columna=parseInt(Math.random()*7);
                    let ocupada=false;
                    let contador2=0;
                    while(ocupada==false && contador2<4){
                        if(tablero[fila][columna+contador2]){
                            ocupada=true;
                        }
                        else if(tablero[fila-1][columna+contador2] && fila>0 && fila<9){
                            ocupada=true;
                        }
                        else if(tablero[fila+1][columna+contador2] && fila>0 && fila<9){
                            ocupada=true;
                        }
                        contador2++;
                    }
                    if(ocupada==false){
                        if(columna>0){
                            if(tablero[fila][columna-1]){
                                ocupada=true;
                            }
                            else if(fila>0&& tablero[fila-1][columna-1]){
                                ocupada=true;
                            }
                            else if(fila<TAMANOFILAS-1 && tablero[fila+1][columna-1]){
                                ocupada=true;
                            }
                        }
                        if(ocupada==false){
                            if(columna+TAMANOPORTAVIONES<TAMANOCOLUMNAS){
                                ocupada=true;
                            }
                            else if(fila>0 && tablero[fila-1][columna+TAMANOPORTAVIONES]){
                                ocupada=true;
                            }
                            else if(fila>TAMANOFILAS-1 && tablero[fila+1][columna+TAMANOPORTAVIONES]){
                                ocupada=true;
                            }
                        }
                    }
                    if(ocupada==false){
                        for(let i=0;i<=TAMANOPORTAVIONES;i++){
                            tablero[fila][columna+i]=true;
                        }
                        contador2++;
                    }
                }
            }

            
            //Pintar tablero
            document.write("<div class='container'>");
            for(let i=0;i<TAMANOFILAS;i++){
                for(let j=0;j<TAMANOCOLUMNAS;j++){
                    if(tablero[i][j]){
                        document.write("<div class='celdaVacia celdaOcupada'></div>");
                    }else{
                        document.write("<div class='celdaVacia'></div>");
                    }
                }
            }
            document.write("</div>");
        }
        break;
    default:
        alert("ERROR");
        break;
}
