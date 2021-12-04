/*EJERCICIOS PRACTICOS TEMA 4*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        {   
            class Punto {
                constructor(x=0,y=0){
                    this.x=x;
                    this.y=y;
                }
                cambiar(num1,num2){
                    this.x = num1;
                    this.y = num2;
                }
                copia(){
                    const puntoCopia = new Punto(this.x,this.y);
                    console.log(puntoCopia);
                }
                iguales(puntoIguales){
                   if(puntoIguales.x == this.x && puntoIguales.y == this.y){
                    console.log("Son iguales.");
                   }else{
                       console.log("No son iguales.")
                   }
                }
                suma(puntoSuma){
                    if(puntoSuma instanceof Punto){
                        const puntoResultado = new Punto(puntoSuma.x+this.x,puntoSuma.y+this.y);
                        console.log(puntoResultado);
                    }else{
                        return this;
                    }
                }
                obtenerDistancia(puntoDistancia){
                    if(puntoDistancia instanceof Punto){
                        let distancia = Math.sqrt(Math.pow((puntoDistancia.x-this.x),2)+Math.pow((puntoDistancia.y-this.y),2));
                        console.log(distancia);
                    }else{
                        return this;
                    }
                }
                toString(){
                    console.log(this.x + "," + this.y);
                }
            }
            //Crear punto nuevo
            const p1 = new Punto();
            const pIguales = new Punto(20,30);
            const pSuma = new Punto(5,5);
            const pDistancia = new Punto(15,15);
            console.log(p1);
            //Cambiar el punto a otros valores
            p1.cambiar(20,30);
            console.log(p1);
            //Copia del objeto
            p1.copia();
            //Comprobar si el punto pasado es igual que el que hay
            p1.iguales(pIguales);
            //Sumar dos puntos
            p1.suma(pSuma);
            //Distancia entre dos puntos
            p1.obtenerDistancia(pDistancia);
            //Mostrar las cordenadas del punto
            p1.toString();
        }
        break;
    case 2:
        //2. Añadir un método al prototipo de los arrays, que devuelva la media aritmética de los elementos de un 
        //array. Pruébalo con un par de ejemplos.
        {
            Array.prototype.mediaAritmetica = function(){
                sumaTotal = 0;
                for(x of this){
                    sumaTotal += x;
                }
                resultado = sumaTotal/this.length;
                return resultado;
            }
            let x=[4,5,6,7,8];
            console.log(x.mediaAritmetica());
        }
        break;
    case 3:
        //3. Crear un objeto para fracciones y añadir métodos en la clase Math para calcular el mcm y el MCD.
        {
            Math.maximoComunDivisor = (a, b) => {
                if(a % b == 0){
                    return b;
                }else{
                    return Math.maximoComunDivisor(b,a % b);
                }
            }
            Math.minimoComunMultiplo = (a, b) => {
                return (a * b) / Math.maximoComunDivisor(a, b);
            }
           class Fraccion {
               #numerador;
               #denominador;
                constructor(numerador,denominador){
                    this.#numerador=numerador;
                    this.#denominador=denominador;
                }
                
                //El método getNumerador obtendrá el valor del numerador
                getNumerador(){
                    return this.#numerador;
                }
                //El método getDenominador obtendrá el valor del denominador
                getDenominador(){
                    return this.#denominador;
                }
                //El método setNumerador permitira cambiar el numerador. Requiere de un nuevo valor.
                setNumerador(nuevoNumerador){
                    this.#numerador=nuevoNumerador;
                }
                //El método setDenominador permitira cambiar el denominador. Requiere de un nuevo valor.
                setDenominador(nuevoDenominador){
                    this.#denominador=nuevoDenominador;
                }
                //El método cambiarFraccion permitirá cambiar a la vez numerador y denominador.
                cambiarFraccion(valor1,valor2){
                    this.#numerador=valor1;
                    this.#denominador=valor2;
                }
                //Implementar un método llamado toString que permita retornar la fracción en formato numerador/denominador (ejemplo 5/6).
                toString(){
                    console.log(this.getNumerador() + "/" + this.getDenominador());
                }
                //implementar un método llamado simplificar que permita simplificar la función. Eso se consigue 
                //calculando el mcd del numerador y el denominador, y dividiendo el numerador y el denominador por ese mcd
                simplificar(){
                    var mcd = Math.maximoComunDivisor(this.#numerador,this.#denominador);
                    this.#numerador = this.#numerador/mcd;
                    this.#denominador = this.#denominador/mcd;
                }
                //implementar un método para la suma de fracciones que requiere del cálculo del mínimo común 
                //múltiplo de los denominadores.
                suma(fraccionSumar){
                    var mcmDenominador = Math.minimoComunMultiplo(this.#denominador,fraccionSumar.getDenominador());
                    
                    var numerador1 = (mcmDenominador/this.#denominador) * this.#numerador;
                    var numerador2 = (mcmDenominador/fraccionSumar.getDenominador()) * fraccionSumar.getNumerador();
                    var numeradorFinal = numerador1 + numerador2;
                    var resultado = new Fraccion(numeradorFinal, mcmDenominador);
                    resultado.simplificar();
                    return resultado;
                }
                //Crear un método para la resta de fracciones. Se hace igual que la suma pero restando los numeradores.
                resta(fraccionRestar){
                    var mcmDenominador = Math.minimoComunMultiplo(this.#denominador,fraccionRestar.getDenominador());

                    var numerador1 = (mcmDenominador/this.#denominador) * this.#numerador;
                    var numerador2 = (mcmDenominador/fraccionRestar.getDenominador()) * fraccionRestar.getNumerador();
                    var numeradorFinal = numerador1-numerador2;
                    var resultado = new Fraccion(numeradorFinal, mcmDenominador);
                    resultado.simplificar();
                    return resultado;
                }
                //Crear un método para la multiplicación de fracciones. Se multiplican los numeradores y los 
                //denominadores entre sí.
                multiplicacion(fraccionMultiplicar){
                    var numeradorMultiplicar = this.#numerador * fraccionMultiplicar.getNumerador();
                    var denominadorMultiplicar = this.#denominador * fraccionMultiplicar.getDenominador();
                    var resultado = new Fraccion(numeradorMultiplicar, denominadorMultiplicar);
                    resultado.simplificar();
                    return resultado;
                }
                //Crear un método para la división de fracciones. Se multiplica de forma cruzada el numerador y el denominador.
                division(fraccionDividir){
                    var numeradorDividir = this.#numerador * fraccionDividir.getDenominador();
                    var denominadorDividir = this.#denominador * fraccionDividir.getNumerador();
                    var resultado = new Fraccion(numeradorDividir, denominadorDividir);
                    resultado.simplificar();
                    return resultado;
                }
            }
            const f1 = new Fraccion(2,10);
            const fraccionSuma = new Fraccion(1,5);
            const fraccionResta = new Fraccion(5,5);
            const fraccionMultiplica = new Fraccion(2,10);
            const fraccionDivide = new Fraccion(2,10);
            //console.log(f1.getNumerador());
            //console.log(f1.getDenominador());
            //f1.setNumerador(20);
            //f1.setDenominador(20);
            //f1.cambiarFraccion(50,50);
            //f1.toString();
            //f1.simplificar();
            f1.suma(fraccionSuma).toString();
            f1.resta(fraccionResta).toString();
            f1.multiplicacion(fraccionMultiplica).toString();
            f1.division(fraccionDivide).toString();
        }
        break;
    case 4:
        //4. Crea un tipo de objetos que sirvan para representar Cartas.
        {
            class Cartas {
                constructor(palo,valor){
                    if(palo>=1 && palo<=4){
                        this.palo = palo;
                    }else{
                        this.palo = null;
                    }
                    if(valor>=1 && valor<=10){
                        this.valor = valor;
                    }else{
                        this.valor = null;
                    }
                }
                darValor(numPalo, valorCarta){
                    if(numPalo>=1 && numPalo<=4){
                        this.palo = numPalo;
                    }else{
                        console.log("Dato incorrecto.");
                    }
                    if(valorCarta >=1 && valorCarta<=10){
                        this.valor = valorCarta;
                    }else{
                        console.log("Dato incorrecto.");
                    }
                }
                toString(){
                    let nombrePalo;
                    let nombreValor;
                    switch(this.palo){
                        case 1: {nombrePalo = "Oros"}
                                break;
                        case 2: {nombrePalo = "Espadas"}
                                break;
                        case 3: {nombrePalo = "Bastos"}
                                break;
                        case 4: {nombrePalo = "Copas"}
                                break;
                    }
                    switch(this.valor){
                        case 1: {nombreValor = "As"}
                                break;
                        case 2: {nombreValor = "Dos"}
                                break;
                        case 3: {nombreValor = "Tres"}
                                break;
                        case 4: {nombreValor = "Cuatro"}
                                break;
                        case 5: {nombreValor = "Cinco"}
                                break;
                        case 6: {nombreValor = "Seis"}
                                break;
                        case 7: {nombreValor = "Siete"}
                                break;
                        case 8: {nombreValor = "Sota"}
                                break;
                        case 9: {nombreValor = "Caballo"}
                                break;
                        case 10: {nombreValor = "Rey"}
                                break;
                    }
                    console.log(nombreValor + " de " + nombrePalo);
                }
            }
            //const c1 = new Cartas(2,1);
            //console.log(c1);
            //c1.darValor(15,5);
            //console.log(c1);
            //c1.toString();

            //Además, habrá otro tipo de objeto: Baraja. La idea es que represente una baraja de cartas españolas. 
            
            class Baraja{
                constructor(){
                    this.cartas = [];
                    for(let palo=1;palo<5;palo++){
                        for(let valor=1;valor<11;valor++){
                            this.cartas.push(new Cartas(palo,valor));
                        }
                    }
                }
                barajar(){
                    for (let i = this.cartas.length - 1; i > 0; i--) {

                        const j = Math.floor(Math.random() * (i + 1));

                        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];

                    }
                }
                toString(){
                    for(let i=0;i<40;i++){
                        this.cartas[i].toString();
                    }
                }
            }
            const b1 = new Baraja();
            b1.barajar();
            b1.toString();
        }
        break;
    default:
        alert("ERROR");
        break;
}

