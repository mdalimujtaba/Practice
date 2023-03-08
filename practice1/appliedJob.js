let data=JSON.parse(localStorage.getItem("details"))
getData(data)

function handlesortbyName(){
    let type=document.getElementById("sortByname").value
    if(type=="asc"){
        data.sort((a,b)=>{
            let x=a.name.toUpperCase()
            let y=b.name.toUpperCase()
            if(x>y){
                return 1
            }
            if(x<y){
                return -1
            }
            return 0
        })
        getData(data)
    }
    if(type=="desc"){
        data.sort((a,b)=>{
            let x=a.name.toUpperCase()
            let y=b.name.toUpperCase()
            if(x>y){
                return -1
            }
            if(x<y){
                return 1
            }
            return 0
        })
        getData(data)
    }
}

function handlesortbySalary(){
    let type=document.getElementById("sortBysalary").value
    if(type==='lth'){
       let lth= data.sort((a,b)=>{
            return a.salary-b.salary
        })
        getData(lth)
    }
    if(type==='htl'){
        let htl= data.sort((a,b)=>{
             return b.salary-a.salary
         })
         getData(htl)
     }
}
function handleFilter(){
    let type=document.querySelector("#filterPosition").value
    console.log(type)
    let role=data.filter((elem)=>{
      if(elem.role==type){
        console.log(elem)
        return elem
      }
    })
    getData(role)
}

function getData(data){
    document.querySelector("#body").innerHTML=""

    data.forEach((elem)=>{
        let tr=document.createElement('tr')
        let td=document.createElement("td")
        td.innerText=elem.name
    
        let td2=document.createElement("td")
        td2.innerText=elem.email
    
        let td3=document.createElement("td")
        td3.innerText=elem.role
        
        let td4=document.createElement("td")
        td4.innerText=elem.salary

        let td5=document.createElement('td')
        td5.innerText="Add"
        td5.style.color="blue"
        td5.style.cursor='pointer'
        td5.addEventListener("click",function(){
            Bookmark(elem)
        })

        tr.append(td,td2,td3,td4,td5)
        document.querySelector("#body").append(tr)
    })
}
let BookmarkArray=JSON.parse(localStorage.getItem('bookmark')) || []
function Bookmark(elem){
    BookmarkArray.push(elem)
    localStorage.setItem('bookmark',JSON.stringify(BookmarkArray))

}