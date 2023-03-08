let data=JSON.parse(localStorage.getItem('bookmark'))
getData(data)
function getData(data){
    data.forEach((elem,index)=>{
        let tr=document.createElement('tr')

        let td1=document.createElement("td")
        td1.innerText=elem.name

        let td2=document.createElement('td')
        td2.innerText=elem.email

        let td3=document.createElement('td')
        td3.innerText=elem.role
    
        let td4=document.createElement('td')
        td4.innerText=elem.salary

        let td5=document.createElement("td")
        td5.style.color='green'
        td5.innerText="Remove"
        td5.style.cursor='pointer'
        td5.addEventListener('click',function(){
            deleteItem(elem,index)
        })
        
        

        tr.append(td1,td2,td3,td4,td5)
        document.querySelector("#body").append(tr)
    })
}

function deleteItem(elem,index){
    data.splice(index,1)
    localStorage.setItem('bookmark',JSON.stringify(data))
    window.location.reload()
}