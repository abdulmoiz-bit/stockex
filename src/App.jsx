import React, { useState, useEffect } from "react";


function Home() {

  //const [products, setProducts] = useState([]);
  const url = 'https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '316842b277msh7b44f5bb16a02b8p10e93ejsn21abbca4fb3f',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
 
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(url, options);
        let data = await response.text();
        console.log(data);
        //setProducts(data);
      } catch (err) {
        //console.log(err);
        throw new Error("All failed")
      }
    };
    getData().then(() => {
      console.log("All Okay");
    }).catch((err) => {
      console.log(err);
    })

  }, [])

  return (
    <>

    </>
  )
};

export default Home;

