import React, { useEffect, useState } from 'react'
import Header from './component/comman/Header'
import Filter from './component/Filter'



async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all")
  .then((data => data.json()));
  // const data = await response.json();
  return response;
}

function FindMap() {

  const [data, setData] = useState([])

  useEffect( () => {
    async function fetchData() {
      const res = await getData()
      setData(res)
    }
    fetchData()
  },[])

  // console.log(data.name)
  data.map( (item) => console.log(item.name.common))

  return (
    <div>
        <Header></Header>
        <Filter></Filter>
    </div>
  )
}

export default FindMap