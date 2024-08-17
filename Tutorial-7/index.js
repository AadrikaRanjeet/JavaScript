//This is String Tutorial

let a="Apoorva"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log(a.length);  //length of the string

let name = "Aadrika"
let secondname= "Ranjeet"

console.log(name +" "+ secondname);//string concatenation
//with the help of template literal u can use double qoute inside the sentence 
console.log(`My name "is" ${name} ${secondname}`);//using template literal  


//String Slicing
console.log(name.slice(2,4)) //will print char from 2-4 where 4 is not included
console.log(name.slice(1));//print char excluding 1st 


//replace
console.log(name.replace("Aa","af"));
console.log(name.replace("Aadrika","Apoorva"));

//concat
console.log(name.concat(secondname));
console.log(name.concat(secondname," is "));
//Strings are immutable ie they remain unchanged
//also there are many more methods in string class