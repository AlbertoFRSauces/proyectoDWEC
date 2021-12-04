/*EJERCICIO TEORICO TEMA 3*/
//Conjuntos
    //Declarar un conjunto
    const ejemploconjunto = new Set(["Alberto", "Fernandez", "Ramirez"]);
    console.log(ejemploconjunto);
    //Usar propiedad size
    console.log(`Size: ${ejemploconjunto.size}`);
    //Usar metodo add
    ejemploconjunto.add("Otro");
    ejemploconjunto.add("Fernandez");//El repetido no se introduce
    ejemploconjunto.add("Mas");
    ejemploconjunto.add("En");
    ejemploconjunto.add("Lista");
    console.log(ejemploconjunto);
    //Usar metodo delete
    ejemploconjunto.delete("Otro");
    console.log(ejemploconjunto);
    //Usar metodo has
    console.log(ejemploconjunto.has("Fernandez"));
    console.log(ejemploconjunto.has("noestoy"));
    //Recorrer conjuntos, usar for of
    ejemploconjunto.forEach((element) => {
        console.log(element);
     });

//MAPAS
    //Declarar un mapa
    var ejemplomapa = new Map();
    console.log(ejemplomapa);
    //Usar la propiedad size
    console.log(ejemplomapa.size);
    //Usar el metodo set
    ejemplomapa.set( 'uno', 1 );
    ejemplomapa.set( 'dos', 2 );
    ejemplomapa.set( 'tres', 3 );
    console.log(ejemplomapa);
    //Usar el metodo get
    console.log(ejemplomapa.get('uno'));
    //Usar el metodo has
    console.log(ejemplomapa.has("dos"));
    //Usar el metodo delete
    ejemplomapa.delete("dos");
    console.log(ejemplomapa);
    //Recorrer un mapa
    ejemplomapa.forEach((values,keys)=>{
        console.log(values,keys);
      })

 