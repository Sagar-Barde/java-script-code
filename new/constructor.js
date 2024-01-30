
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
//  single class and multiple object in create 
//  argument pass 
 var E1 =new Emp(499,"salman",55);
 console.log(E1);
 var s1 =new Emp (7,"Dhoni",42);
 console.log(s1);
