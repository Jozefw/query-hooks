import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

function RQPage(){
  const {isLoading,data} = useQuery('super-heroes',()=>{
    return axios.get('http://localhost:4000/superheroes')
  })
  if(isLoading){
    return(
      <h1>Loading...</h1>
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
