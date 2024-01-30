// Emp  is  object create  in the us  a program 
var x=100;
var Emp={
    empno :14,
    empname :"sagar",
    empage :52,

};
  console.log("Emp No is ",Emp.empno);
 console.log("Emp Name is ", Emp.empname);
 console.log("Emp Age is  ",Emp.empage);

//  for loop 

 for(const  m in Emp)

 {
    console.log(`${m} is ${Emp[m]}`);
 }




 var user ={
    fname : "sagar",
    lname :"barde",
    
    fullname:function (){


        return this.fname + this .lname ;

    }
 }

 console.log("fullname :",user.fullname() );
 console.log("fullname :",user.fullname() );




 var std={
    rollno:100,
    name :"ganesh",

    address:{
        ploatno:500,
        flatno:55,
        street:"sagar",
        city:"solapur",

    }
 }
 console.log(std.name );
 console.log(std.rollno);
 console.log(std.address.city);




 var  person ={


    fname :"salman ",
    lname :"khan",
    age :60,





 }

 console.log(person.fname);
 console.log(person["lname"]);
 console.log(person.age);
