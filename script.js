let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");

let myName = document.getElementById("name-box");
let myNumber = document.getElementById("number-box");

if(inputName){
    inputName.addEventListener("input",function(){
        myName.innerText = inputName.value.toUpperCase();
    });
}

if(inputNumber){
    inputNumber.addEventListener("input",function(){
        myNumber.innerText = inputNumber.value;
    });
}