import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import CardContainer from './components/CardContainer'
import Card from './components/Card'


function App() {

  // const [title, setTitle]= useState('0');
  const [data, setData]= useState({});

  // useEffect(()=>{
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=RboUaHZgXFAYDxkc1Req6H9KUWOUhFU21siaRiaJ')
  //   .then(res =>{
  //       console.log('res.data', res.data);
  //       // setTitle(res.data.title)
  //       // setExplanation(res.data.explanation)
  //       setData(res.data)
  //   }); 

  // }, [])

  
  
        

  return (
    <div className="App">
<div className="container">
      <CardContainer />

      {/* {data ? <Card title={data.title}
      url= {data.url}
      explanation={data.explanation}/> : <div>Loading</div>}
      <div>
      <p>
        Yo!!! Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!!!!
      </p>
      <section className="infoSection">
        <li>Stats:</li>
        <li>Predictions: </li>
        <li>Images: </li>
        
        
      </section> */}
    {/* </div> */}
   
    </div>
    </div>
  );
}

export default App;
