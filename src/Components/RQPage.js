import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

const getSuperHeroReq = () =>{
  return axios.get('http://localhost:4000/superhero')
}

function RQPage(){
  const {isLoading,data} = useQuery('super-heroes', getSuperHeroReq)
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
