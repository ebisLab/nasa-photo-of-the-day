import React, {useEffect, useState} from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';


function Card(props){
    console.log(props)
    const info= props.data;
    console.log(info, 'info')

    const[data,setData] = useState({})
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=RboUaHZgXFAYDxkc1Req6H9KUWOUhFU21siaRiaJ')
        .then(res =>{
            console.log('res.data', res.data);
            // setTitle(res.data.title)
            // setExplanation(res.data.explanation)
            setData(res.data)
        }); 
    
      }, [])
   
    return  ( 
        <div className="infoSection"> 
    {data.title ? (
        <div className="center"> 
        <h2>Some Fun Stats About</h2>
    <h3>{data.title}</h3>
     <p><strong>Date:</strong> {data.date}</p>
        <p> <strong>Explanation:</strong> {data.explanation}</p>
        <p> {data.copyright}</p></div>)
        : (<Loader type="Ball-Triangle" color="#bb1333" height="90" width="60" />)}
        
    </div>)

        
    
    
};

export default Card;