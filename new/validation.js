 
//  basic validation 
 
 function validate(){

var name =document.getElementById('n').value ;
var contact=document.getElementById('c').value;
var email=document.getElementById('e').value;
var city =document.getElementById('cc')


if(name=='')
{
alert('enter the name ');
 
return false;

}
if(contact==''){

    alert('enter the contact ');
    return false;

}
if(email==''){

    alert('enter the email ');

}
if(city.selectIndex==''){

    alert('enter he select data ')
    return false;

}

alert('from submeted ');

return true;

 }
