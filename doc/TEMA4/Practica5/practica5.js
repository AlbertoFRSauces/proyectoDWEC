/*EJERCICIOS PRACTICOS TEMA 4*/
var numeroejercicio=parseInt(prompt("Introduzca numero de ejercicio."));
switch(numeroejercicio){
    case 1:
        {   
            class Ordenador {
                constructor(marca, modelo, memoriaram=4, capacidaddisco=512, pulgadas=17){
                    this.marca = marca;
                    this.modelo = modelo;
                    this.memoriaram = memoriaram;
                    this.capacidaddisco = capacidaddisco;
                    this.pulgadas = pulgadas;
                }
                toString(){
                    console.log("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Memoria RAM: " + this.memoriaram + ", Capacidad del disco duro: " + this.capacidaddisco + ", Pulgadas en pantalla: " + this.pulgadas);
                }
            }
            const o1 = new Ordenador();
            console.log(o1);
            o1.toString;
            const o2 = new Ordenador("Apple","MacBook Air",8,128,14);
            console.log(o2);
            o2.toString;
            
            class Portatil extends Ordenador{
                constructor(marca, modelo, memoriaram, capacidaddisco = 256, pulgadas = 12, autonomia = 4){
                    super(
                        marca,
                        modelo,
                        memoriaram,
                        capacidaddisco,
                        pulgadas
                    );
                    this.autonomia = autonomia;
                }
                toString(){
                    console.log(super.toString() + " , Autonomia: " + this.autonomia);
                }
            }
            const p1 = new Portatil();
            console.log(p1);
            p1.toString();
            const p2 = new Portatil("Apple","MacBook Pro",32,512,16,24);
            console.log(p2);
            p2.toString();
        }
        break;
    default:
        alert("ERROR");
        break;
}

