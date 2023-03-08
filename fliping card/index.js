let a=document.querySelector("#cvv").addEventListener("mousedown",mousefun)
function mousefun(){
    let b=document.getElementById("cardbox")
    b.style.transform="rotateY(180deg)"
}
// let x=document.querySelector("#cvv").addEventListener("mouseout",mousefunc)
// function mousefunc(){
//     let r=document.getElementById("cardbox")
//     r.style.transform="rotateY(180deg)"
// }

let num=document.querySelector("#number").addEventListener("keyup",asd)
function asd(){
    document.querySelector("#cardNumber").innerHTML=""

    let number=""
    let a=document.querySelector("#number").value
    number=a
    let t=document.createElement('p')
    t.innerText=number
    t.style.textAlign='center'
    document.querySelector("#cardNumber").append(t)
}


