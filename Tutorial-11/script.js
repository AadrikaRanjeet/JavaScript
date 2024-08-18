console.log("Harry")

let boxes =document.getElementsByClassName("box")
console.log(boxes)

boxes[1].style.backgroundColor="green"
boxes[1].style.textAlign="center"



document.getElementById("pinkbox").style.backgroundColor="pink"

document.querySelector(".box").style.backgroundColor="yellow"//sirf ye pehla element select krta hai 
document.querySelectorAll(".box")//ismein apan direct .style use ni kr skte kyunki ke return krta hai html collection and to select all the elements,we will use foreachloop

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="pink"
});

document.getElementsByTagName("div") //will return elements of that tag