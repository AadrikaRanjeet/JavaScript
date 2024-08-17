//Array

//note type of array in js is  an object

let arr=[1,3,4,56,7,9,10]

// console.log(arr.toString())
// console.log(arr.join(" and "))//, ke jagah and 
arr.pop() //pops or remove the last element and reduces the length
arr.push(88);
console.log(arr);
arr.shift()//removes first element of array
console.log(arr)
arr.unshift(10);//adds element at the 1st postion
console.log(arr)
console.log(arr.length)


//note :- a1.concat(a2,a3) will return a new array and does not change the existing array

arr.sort();//sorts the array
console.log(arr);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

// arr.forEach((value,i,arr)=>{
//     console.log(value,i ,arr)
// })


//for in loop
let obj={
    a:1,
    b:2,
    c:3
}
for(const key in obj)
{
    if(Object.hasOwnProperty.call(obj,key))
    {
        const element=obj[key];
        console.log(key,element);
    }
}

//for of loop
for(const iterator of arr)
{
   console.log(iterator)
}

//some more things left 
//map :- creates a new array by performing some operation on each array element

