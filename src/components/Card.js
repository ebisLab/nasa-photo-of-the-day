import React from "react";
import { Card as SemanticCard } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';



function Card(props){
    //console.log(props)
    const info= props.data;
    // console.log(info, 'info')


    return  ( 
        <SemanticCard className="infoSection"> 
      

        
    {info.title ? (
        <div className="center"> 
        <SemanticCard.Content>
            <h2>Some Fun Stats About</h2>
            <h3>{info.title}</h3>
        
        <img src={info.url} />
     <SemanticCard.Meta>
         <strong>Date:</strong> {info.date}
         </SemanticCard.Meta>

        <SemanticCard.Description> 
            <strong>Explanation:</strong> {info.explanation}    
        </SemanticCard.Description>
        <p> {info.copyright}</p>
        </SemanticCard.Content>
        </div>)
        : (<Loader type="Watch" color="#bb1333" height="90" width="60" />)}
        
    </SemanticCard>)

        
    
    
};

export default Card;