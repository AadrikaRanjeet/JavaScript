//LOOPS

//for in loop

let obj={
    name:"Aadrika",
    Age:21,
    role:"Programmer"
}

for(const key in obj)
{
    console.log(key);
}


//for of loop :-Array ke liye hota hai 

for(const c of "Aadrika")
{
    console.log(c);
}


//While loop

let i=5;
while(i<=8)
{
    console.log(i);
    i++;
}

//do while
let ij=0;
do {
    console.log("Hello");
    ij++;
} while (ij<3);