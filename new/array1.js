
var friends=["sagar","bunny","name","Red"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[30]);



function reverse (array)
{

    console.log('Element in Reverse Order')

    for(var i=array.length-1; i>=0;i--)
    {
        console.log(array[i]);

    }
}
reverse([10,20,30,40,50]);
reverse(['A','B','C','D','E']);

