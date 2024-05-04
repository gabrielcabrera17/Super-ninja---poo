class Ninja {
    constructor(nombre, salud){
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
    }
    sayName(){
        console.log("El nombre del ninja es: "+this.nombre);
    }
    showStats(){
        console.log("Nombre: "+this.nombre + "\tFuerza: "+this.fuerza +"\tVelocidad: "+this.velocidad + "\tsalud: "+this.salud);
    }
    drinkSake(){
        this.salud+=10;
        console.log("salud agredada: "+this.salud);
    }
}

//let ninja1 = new Ninja("Gabriel",5);
//ninja1.sayName();
//ninja1.showStats();
 //ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(nombre,salud){
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}


let superSensei = new Sensei("Master");
//console.log(superSensei);
superSensei.speakWisdom();
superSensei.showStats();