


let names= document.getElementById("names").value ;
let subject= document.getElementById("subject").value ;
let email= document.getElementById("email").value ;
let phone= document.getElementById("phone").value ;
let message= document.getElementById("message").value ;
let error_message = document.getElementById("Error_message");


error_message.style .padding="10px";


 let text;

 if(names.length<5){
    text="Enter valid Name";
    error_message.innerHTML=text;
    return false;
 }
 if(subject.length<15){
    text="Enter valid subject";
    error_message.innerHTML=text;
    return false;
 }

 if(isNaN(phone)||phone.length!=10){
    text ="Enter the number";
    error_message.innerHTML=text;
    return false;
 }

 if(email.indexOf("@")==-1||email.length<6){
  
    text ="Enter the Email";
    error_message.innerHTML=text;
    return false;

 }

 if(message.length<10){
    text ="Enter the message 100character";
    error_message.innerHTML=text;
    return false;

 }
 alert("form submited in successfully!");
 return true;

 