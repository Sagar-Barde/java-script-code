
// keyword example



const person = {
	name: "ram",
	age: 22,
	greet: function(){
		return `Hello ${this.name}, you are ${this.age} years old`
	}
}
console.log(person.greet());

// impact   binding

const sagar = {
   name: "salman",
   age: 55,
   demo: function()
   {
  	return `good ${this.name}, you are ${this.age} years old`
   
  }
  
   }

   console.log(sagar.demo());


   const ram ={
    name: "man",
    age: 24,
    list:function  (){

      return `moon ${this.name}, you are  ${this.age} yeras old`
    }
   }
   console.log(ram.list());


// explictly binding



   function ageverify()
   {
    if(this.age > 18)
    {
 console.log("yes you can drive");
    }
    else{
      console.log("no you can not drive");
    }
   }
   const par1={age:21}
   const par2 ={age:16}
   ageverify.call(par1);
   ageverify.call(par2);


  //  arrow  binding

  const person1 = {
    name: "ram",
    age: 22,
    greet : () =>{
      return `Wellcome , you are ${this.age} years old`
    }
  }
  console.log(person1.greet());
  
  const today ={
    name:"dhoni",
    age:42,
    sum: ()=>{
      return `practice ${this.age}years old`
    }
  }
  console.log(today.sum());