//Create a business name generator by combining list of adjectives and shop name and another word

/* Adjectives:
Crazy 
Amazing
Fire 
Shop name :
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/

let rand=Math.random()
let fisrt,second,third;
if(rand<0.33)
{
   first="crazy"
   second="Foods"
   third="Bros"
}
else if(rand<0.66 && rand >=0.33)
{
    first="Amazing"
       second="Engine"
       third="Limited"
}
else
{
    first="Fire"
    second="Garments"
     third="Hub"
}
console.log(`${first} ${second} ${third}`)