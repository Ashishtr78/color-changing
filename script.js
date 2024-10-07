const body=document.body;
const btn1=document.querySelector(".btn1");
btn1.addEventListener("mouseover",()=>{  
    body.style.cssText="background-color:grey;color:white";
})
btn1.addEventListener("mouseout",()=>{  
    body.style.cssText="background-color:whiet;color:white";
})
const btn2=document.querySelector(".btn2");
btn2.addEventListener("mouseover",()=>{
    body.style.cssText="background-color:white;color:white";
})
const btn3=document.querySelector(".btn3");
btn3.addEventListener("mouseover",()=>{
    body.style.cssText="background-color:green;color:white";
})
const btn4=document.querySelector(".btn4");
btn4.addEventListener("mouseover",()=>{   
    body.style.cssText="background-color:red;color:white";
})
