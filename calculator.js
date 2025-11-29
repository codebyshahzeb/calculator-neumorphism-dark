let arr=document.querySelectorAll("button");
let display=document.querySelector("input")
let array=Array.from(arr);
let str="";
array.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        if(e.target.innerText=="DEL"){
           str=str.substring(0,str.length -1);
            display.value=str;
        }
        else if(e.target.innerText=="AC"){
            display.value="";
        }
        else if(e.target.innerText=="="){
            str=eval(str);
            display.value=str;
        }
        else{
            str+=e.target.innerText;
            display.value=str;
        }
    });
})