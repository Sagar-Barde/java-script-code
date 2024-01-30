
class Animal{

    constructor(name ){

        this.name=name;

    }

    sayName(){
        console.log('my name is'+ this.name);
    }

}
 class Cat extends Animal{

    constructor(name,breed){

        super(name);

        this.breed=breed;

    }
    demo(){
        console.log('balaji');

    }
 }

 const myCat = new Cat("testing", "java");

myCat.sayName();  
myCat.demo();