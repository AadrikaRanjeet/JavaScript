//functions

nameOfFunc("Aadrika");
function nameOfFunc(name)
{
    console.log("Hey "+name+"You are great");
}
nameOfFunc("  Apoorva  ");


function sum(a,b,c=4)
{
    return a+b+c;
}
result=sum(3,6);
console.log(result);


//Arrow Function
const func1=(x)=>{
    console.log("Hi i am an arrow function"+x);
}

func1(44);