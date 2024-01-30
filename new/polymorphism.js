

class Animal{

    constructor(name){

        this.name=name;
    }
    eats(){
        console.log(this.name+'eats food');
    }
}

class Alligater extends Animal{
    
    eats(){
        super.eats();
        console.log(this.name+'  eats  fishes');
    }
}

var murphy =new Alligater('  murphy');
murphy.eats();

