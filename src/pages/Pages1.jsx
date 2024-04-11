import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from 'axios';

export default function Pages1() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('/list')
    .then(response => {
      setData(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.error('d', error);
    });
  }, []);
  return <Main>
 <ul>
 {data.map((item, index)=>(
  <li key={item.roleKey}>
    {item.name}
  </li>
 ))}
 </ul>
  </Main>;
  
}
