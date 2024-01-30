function product (a,b){

    return a*b;
}

let result =product.call( this,25,10);
console.log(result);



let employee ={


    details: function (designation, experience){
    
    return this.name
    + " "
    + this.id
    + designation
    + experience;


}
}
let emp1 ={
    name:"a",
    id: 5,
}

let emp2 ={
    name:"b",
    id: 6,
}
let x=employee.details.call (emp2,"manager","4 yeras",);

console.log(x);