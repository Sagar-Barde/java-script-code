var x =100;
console.log(x);


function city ()                                //function name (is keyword)
{
    console.log("pune");                           //statment

}

city();                                         //function name  the call



function  cuntry()
{

    console.log("india");
}

cuntry();                               // call tar kela nasel tar out put disnar nahi


// function is local variable



function sum()
{
          //local variable
    var a=10,b=65;
    var c =a+b;
    console.log(c);
}

sum();


//function with parameters

function add(x,y)  //parametres 
{
 console.log(x+y);
 console.log(x); // 125 print hoga last one value add
 console.log(arguments[2]);
}
add (123,147); // arguments
add (125,500,200);

// fuction with return keyword
function hello()
{
    var s=499;                         // local variable 
    return s;
 
}                                // function neche hum call kar sakte he  result 
var result=hello();
console.log(result);               //out side the function 


//decleration function 

function calcAddition (number1 ,number2)
{
  return number1 + number2;
}

  console.log(calcAddition(8,9));

// window  in check out put console then window writing



