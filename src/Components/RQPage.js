import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

const getSuperHeroReq = () =>{
  return axios.get('http://localhost:4000/superhero')
}

function RQPage(){
  const {isLoading,data,isError,error} = useQuery('superhero', 
  getSuperHeroReq,
  {
    refetchOnnMount:true,
    refetchOnWindowFocus:'always'
  })
  if(isLoading){
    return(
      <h1>Loading...</h1>
    )
  }
  if(isError){
    return(
      <h1>Error occured...{error.message}</h1>
    )
  }
  return (
    <>
    <h1>List</h1>
    {
      data?.data.map((hero)=>{
        return <div key={hero.id}>{hero.name}</div>
      })
    }
    </>
  )
}

export default RQPage;
