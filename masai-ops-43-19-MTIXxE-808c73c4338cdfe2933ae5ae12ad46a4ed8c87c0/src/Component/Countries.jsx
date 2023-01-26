import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

const fetchdata=({page,limit})=>{
 return  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc&page=${page}&limit=${limit}`)
  .then((res)=>{
    return res.json()
  })
 }
function Countries() { 
  const [data,setData]=useState([])
  const [limit,setLimit]=useState(10)
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    
   getData({page,limit})
  },[limit,page])
  const getData=async({page,limit})=>{
    setLoading(true)
    let data=await fetchdata({page,limit})
    console.log(data)
   setData(data.data)
   setTotal(data.totalPages)
   setLoading(false)

   }
  const onChange=(changeby)=>{
    setPage(page+changeby)
  }
  if(loading){

    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data && data.map((item)=><CountriesCard key={item.id} country={item.country} population={item.population}/>)}
      </div>
      <div>
        <Pagination current={page}  onChange={onChange} total={total}/>
      </div>
    </div>
  );
}

export default Countries;
