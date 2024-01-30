function factorial(num){

    result=1;

    for(var i =2; i<=num;i++){

        result =result*i;


    }
    return result;

}
console.log("the factorial of 4 is:" +factorial(8))
console.log("the factorial of 5 is:"+ factorial(5))