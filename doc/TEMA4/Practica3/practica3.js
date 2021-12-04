/*EJERCICIOS PRACTICOS TEMA 3*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        //1. Crea un script que valide un código postal (formado por 5 números del 00000 al 52999).
        {   
            var codigopostal = prompt("Introduzca el codigo postal(entre 00000-52999)");
            let expresionCP=/((^5[0-2])|([0-4][0-9]))([0-9]{3})$/;
            
            if(expresionCP.test(codigopostal)==true){
                document.write("<h1> CODIGO POSTAL Correcto </h1>");
            }else{
                document.write("<h1> CODIGO POSTAL Incorrecto </h1>");
            }
        }
        break;
    case 2:
        //2. Crea un script para validar que un documento recibido tenga formato pdf o docx.
        {
            var documento = prompt("Introduzca el nombre de un documento(tipos admitidos .pdf y .docx)");
            let expresionDocumento=/\.(pdf|docx)$/;
            
            if(expresionDocumento.test(documento)==true){
                document.write("<h1> DOCUMENTO Correcto </h1>");
            }else{
                document.write("<h1> DOCUMENTO Incorrecto </h1>");
            }
        }
        break;
    case 3:
        //3. Crea una aplicación web que sirva para validar NIFs indicando si es correcto o no. Un NIF consta de una 
        //posible primera letra que puede ser X, Y o Z. Si no tiene letra llevará un número. A continuación, habrá 7 
        //números más. Y finalmente una letra que cumple una formula:
        //    - La fórmula de la letra consiste en dividir los números del NIF entre 23 y tomar el resto. Para 
        //      hacer este cálculo cuando el NIF empieza por una letra, se cambia la letra por un número. Si 
        //      la primera letra del NIF es una X, se cambia por el número 0, la Y por 1 y la Z por 2. El 
        //      resultado obtenido se comprueba con la siguiente tabla:
        {
            var letrasnif = "TRWAGMYFPDXBNJZSQVHLCKE";
            var nif = prompt("Introduzca un NIF");
            var total;
            if(nif[0] == "X" | nif[0] == "Y" | nif[0] == "Z"){
                if(nif[0] == "X"){
                    total = Number("0"+nif.slice(1,8));
                }
                if(nif[0] == "Y"){
                    total = Number("1"+nif.slice(1,8));
                }
                if(nif[0] == "Z"){
                    total = Number("2"+nif.slice(1,8));
                }  
            }else{
                total = nif.slice(0,8);
            }

            var resultadoLetra = total % 23;
            var posicionLetra = letrasnif.charAt(resultadoLetra);

            let expresionNif = /^([XYZ 0-9][0-9]{7})[A-Z]$/;
            if(expresionNif.test(nif) == true && posicionLetra == nif.charAt(8)){
                document.write("<h1> NIF Correcto </h1>");
            }else{
                document.write("<h1> NIF Incorrecto </h1>");
            }
        }
        break;
    default:
        alert("ERROR");
        break;
}

