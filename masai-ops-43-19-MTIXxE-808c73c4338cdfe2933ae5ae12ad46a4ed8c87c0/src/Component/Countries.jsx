import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios"
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";
 
function Countries() { 
  const [data,setData]=useState([])
  const [limit,setLimit]=useState(10)
  const [order,setOrder]=useState("asc")
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState()
  const fetchdata=({page,limit,order})=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=${limit}&_order=${order}`)
    .then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res)
      setData(res.data)
      setTotal(res.totalPages)
    })
   }
  useEffect(()=>{
   fetchdata({limit,page,order})
  },[limit,page,order])
  const onchange=(changeby)=>{
    setPage(page+changeby)
  }
  if(!data){

    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data && data.map((item)=><CountriesCard key={item.id} data={item}/>)}
      </div>
      <div>
        <Pagination page={page}  onchange={onchange} total={total}/>
      </div>
    </div>
  );
}

export default Countries;
