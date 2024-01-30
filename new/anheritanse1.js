class Car{
    setName(name){
        this.name=name;
    }
    startEngine(){
        console.log('Engine Started for' +this.name);
    }
    stopEngine(){
        console.log('Engine stopped for' +this.name);
    }
}
class Toyoto extends Car{
    topSpeed(speed){
        console.log('top speed for ' +this.name+'of'+speed);
    }
}
let myCar = new Toyoto();
myCar.setName('sagar');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(2000);