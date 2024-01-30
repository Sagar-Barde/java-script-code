class Person{

    //properties 

    personId;
    personName;
    personAge;
    personSalary;

    // methods

    getDetails(){

        return this.personName;
    

    }
    hikeSalary(amount){

        return this.personSalary=this.personSalary+amount;


    }

}

// object 

let p1= new Person();

p1.personName ="Sagar";
p1.personId=123;
p1.personAge=29;
p1.personSalary=25000;



console.log(p1.getDetails());
console.log(p1.hikeSalary(40000));
console.log(p1.personAge);




class Emp{


    EmpNo;
    EmpName ;
    EmpAge;
   

// function with parameter
    constructor(eNo,eName,eAge)
    {
        this.EmpNo=eNo;
        this.EmpName=eName;
        this.EmpAge=eAge;
        
       
    }
}

//  argument pass 
 var E1 =new Emp(499,"salman",55);
 console.log(E1);

 var s1 =new Emp (7,"Dhoni",41);
 console.log(s1);
