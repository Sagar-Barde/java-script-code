 


 class FirstClass{

    add(){
        console.log("first method ");

    }
}
    class secondClass extends FirstClass{
        
    
 add()
 {
    console.log(30+82+55);
 }
    }
 class thirdClass extends FirstClass{

    add(){

        console.log("last method");
    }

}

let ob= new FirstClass();
let ob1=new secondClass();
let ob2=new thirdClass();
ob.add();
ob1.add();
ob2.add();
