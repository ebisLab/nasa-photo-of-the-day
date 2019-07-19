import React from "react";
import Loader from 'react-loader-spinner';



function Card(props){
    // console.log(props)
    const info= props.data;
    // console.log(info, 'info')


    return  ( 
        <div className="infoSection"> 
    {info.title ? (
        <div className="center"> 
        <h2>Some Fun Stats About</h2>
    <h3>{info.title}</h3>
     <p><strong>Date:</strong> {info.date}</p>
        <p> <strong>Explanation:</strong> {info.explanation}</p>
        <p> {info.copyright}</p></div>)
        : (<Loader type="Ball-Triangle" color="#bb1333" height="90" width="60" />)}
        
    </div>)

        
    
    
};

export default Card;