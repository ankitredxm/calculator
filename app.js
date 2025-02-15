let boxes = document.querySelectorAll(".box");
let display=document.querySelector("#cal");



const calculate=()=>{
    display.value=eval(display.value);
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let value=box.innerText;
        if(value=="="){
            calculate();
        }
        else if(value=="AC" || value=="DE"){
            display.value="";
        }
        else if(value=="00"||value=="0"){
            
            display.value+=0;
        }
        else{
            if(display.value=="0"){
                display.value="";
            }
            display.value+=value;
        }
       
       
    });
});

