import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import CardContainer from './components/CardContainer'



function App() {


  const [data, setData]= useState({});
  //console.log('App', data)

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RboUaHZgXFAYDxkc1Req6H9KUWOUhFU21siaRiaJ')
    .then(res =>{
        setData(res.data)
    }); 
  //   .then(res =>{
  //     this.setData({
  //         data: [res.data]})
  // }); 

  }, [])

  
  
        

  return (
    <div className="App">
<div className="container">
      <CardContainer data={data} />

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