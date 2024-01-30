function getname()
{

    // let jname=document.form1.name.value
// selecting data 
//  n id no use kar ke use kiya 
    var jname=document.getElementById('n').value

    alert(jname);
}



//  total count in the data number  3 male fmale other

function getcount()
{

    var totalgen=document.getElementsByName("gender");


    alert(totalgen.length);
}


//  total count in p  tagname 

function getcount()
{
    var allpara=document.getElementsByTagName('p')

    alert(allpara.length);
}
 function getnumbr(){


// Get elements with the class name 'example-class'
const elements = document.getElementsByClassName('example-class');

// elements is a live HTMLCollection, you can loop through it or access specific elements
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  alert(element.textContent); // Outputs the text content of each matching element
}
}



