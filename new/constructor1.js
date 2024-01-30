
class CompanyName{
    constructor(){
        this.company="   tcs";
    }
}
class Employee extends CompanyName
{
    constructor(id,name){
        super ()
        this.id=id ;
        this.name=name;
    }
}
var emp =new Employee(18,"    virat")
console.log(emp.id+""+emp.name+""+emp.company);