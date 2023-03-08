document.querySelector("#form").addEventListener("submit",submitfunc)
let dataArr=JSON.parse(localStorage.getItem("details")) || []
function submitfunc(){
    event.preventDefault()
    let object={
        name:form.name.value,
        email:form.email.value,
        role:form.role.value,
        salary:form.salary.value
    }
    dataArr.push(object)
    localStorage.setItem("details",JSON.stringify(dataArr))
    window.location.href="appliedJob.html"
}