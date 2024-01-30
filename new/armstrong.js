
let number =153;
let temp=number;
let sum=0;
while(temp>0)
{
    let rem=temp%10;
     sum= sum+ rem*rem*rem;

     temp= parseInt(temp/10);

}
if(sum==number){
    console.log(number,"is an armstrong");
}
    else{
    console.log(number,"is not armstrong");
    }


    