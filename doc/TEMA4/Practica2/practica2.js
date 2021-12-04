/*EJERCICIOS PRACTICOS TEMA 3*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea un script que pida al usuario su fecha de nacimiento y le diga el día de la semana en que nació y el 
        //día de la semana de todos sus cumpleaños hasta este año.
        {   
            var fechanac = new Date(prompt("Introduzca su fecha de nacimiento(Formato correcto: AAAA/MM/DD): "));
            const diassemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            document.write('<p>' + diassemana[fechanac.getDay()] + '</p>');
            for(let i=fechanac.getFullYear();i<=2021;i++){
                diassemana[fechanac.getDay()];
                fechanac.setFullYear(fechanac.getFullYear() + 1);
                var anyo = fechanac.getFullYear();
                var dia = fechanac.getDay();
                document.write('El dia de la semana de tu cumpleaños en el año ' + anyo + ' es ' + diassemana[dia] + '<br>');
            }
        }
        break;
    case 2:
        //2. Crea una función que reciba como parámetros: día, mes, año, hora, minutos y segundos y cree una fecha 
        //con esos datos. Si la función no recibe ningún parámetro creará la fecha actual. La función mostrará un 
        //alert con la información en el siguiente formato:
        //“Hoy es lunes, 1 de noviembre de 2021 y son las 17 horas, 15 minutos y 38 segundos.”
        {
        function crearFecha(dia, mes, anyo, horas, minutos, segundos){
            var fechavacia = new Date();
            var fechallena = new Date(dia, mes, anyo, horas, minutos, segundos);
            const diassemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            const mesanyo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            if(dia == null && mes == null && anyo == null && horas == null && minutos == null && segundos == null){
                fechavacia = (`Hoy es ${diassemana[fechavacia.getDay()]}, ${fechavacia.getDate()} de ${mesanyo[fechavacia.getMonth()]} de ${fechavacia.getFullYear()} y son las ${fechavacia.getHours()} horas, ${fechavacia.getMinutes()} minutos y ${fechavacia.getSeconds()} segundos.`);
                return fechavacia;
            }else{
                fechallena = (`Hoy es ${diassemana[fechallena.getDay()]}, ${dia} de ${mesanyo[mes]} de ${anyo} y son las ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
                return fechallena;
            }
        }

        document.write(crearFecha());

        }
        break;
    case 3:
        //3. Crea un script que pida al usuario un mes y un año y muestre un calendario de ese mes.
        {
        function crearCalendario(anyo, mes){
            let fecha = new Date(anyo, mes);
            const diassemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            const mesanyo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            fecha.setDate();
            let dia1 = fecha.getDay();
            let mes1 = fecha.getMonth();
            document.write("<div>");
            document.write(mesanyo[mes-1]);
            document.write("</div>");
            document.write("<div>");
            for(let j=0;j<7;j++){
                document.write("<div>");
                document.write(diassemana[j]);
                document.write("</div>");
            }
            document.write("</div>");

            document.write("<div>");
            for(let j=0;j<7;j++){
                if(dia1==j){
                    for(let x = fecha.getDate();x<=(7-j);x++){
                        document.write("<div>");
                        document.write(fecha.getDate());
                        document.write("</div>");
                        document.write(fecha.getDate()+1);
                    }
                    break;
                }else{
                    document.write("<div>");
                    document.write("&nbsp;");
                    document.write("</div>");
                }
                
            }
            document.write("</div>");
            while(fecha.getMonth()==mes1){
                document.write("<div>");
                for(let x=0;x<7;x++){
                    if(fecha.getMontn()==mes1){
                        document.write("<div>");
                        document.write(fecha.getDate());
                        document.write("</div>");
                        document.write(fecha.getDate()+1);
                    }else{
                        document.write("<div>");
                        document.write("&nbsp;");
                        document.write("</div>");
                    }
                }
            }
            document.write("</div>");
        }

        anyo = prompt("Introduzca un año: ");
        mes = prompt("Introduzca un mes: ");
        crearCalendario(anyo, mes);

        }
        break;
    case 4:
        //4. Crea un script que pida al usuario un mes y devuelva todas las personas que cumplan años en ese mes. 
        //Los datos de las personas las tendremos en un mapa que generaremos de forma aleatoria. El mapa 
        //contendrá 100 pares clave valor, donde las claves serán números consecutivos y los valores fechas de 
        //nacimiento generadas aleatoriamente entre el 01/01/1980 y el 31/12/2020.
        {
            //Funcion para generar una fecha aleatoria
            function fechaAleatoria(inicio, fin) {
                inicio = inicio.getTime();
                fin = fin.getTime();
                return new Date(inicio + Math.random() * (fin - inicio));
            }

            //Pido un mes por teclado
            var mes = prompt("Introduzca un mes(formato numerico): ");

            //Creo un papa para almacenar las personas
            var mapaPersonas = new Map();

            //Variables maximo y minimo para crear la fecha aleatoria entre estas dos
            var fechaMinima = new Date("1980-01-01");
            var fechaMaxima = new Date("2020-12-31");

            //Cargo el mapa con una fecha a cada persona
            for(let i=0;i<100;i++){
                mapaPersonas.set(i, fechaAleatoria(fechaMinima, fechaMaxima));
            }

            //Muestro el numero de la persona y en que dia y mes nacio recorriendo el mapa y comprobando el parametro pasado por teclado.
            const mesanyo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            for([persona, fecha] of mapaPersonas){
                if(fecha.getMonth()==mes-1){
                    document.write(`La persona ${persona} nacio el ${fecha.getDate()} del mes ${mesanyo[fecha.getMonth()]} </br>`);
                }
            }
        }
        break;
    default:
        alert("ERROR");
        break;
}

