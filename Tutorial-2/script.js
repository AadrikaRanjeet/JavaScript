console.log("Hey this is module 2");


// var a=5;
// var b=6;
// var c="Harry";
// console.log(a+b+9+c);
// console.log(typeof c);


//dont use var , in modern Js use let 

let a=89;

{
    let a=9;//block level variable jiska scope sirf block tk rhega
    console.log(a);
}
console.log(a);


const x="Aadrika";
let y=88;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

console.log(typeof x, typeof y, typeof z,typeof q, typeof p,typeof r,);



//object :- key value pair
let obj={
    name:"Aadrika",//name:-key , and Aadrika :- value hai 
    Age:21,
    Rollno:'21BCG10088',
    "job role":"Web developer",//job role ko double quote pe isliye daala hai kyunki beech m space hai job aur role ke

}
console.log(obj);
obj.name="Apoorva";//to change the object
console.log(obj);