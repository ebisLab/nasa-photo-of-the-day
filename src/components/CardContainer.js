import React from 'react';
import Card from './Card'



function CardContainer(props){


    // console.log(props, 'cardc props')
    const divStyle = {
        backgroundImage: 'url(' + props.data.url + ')' , 
        height: '100vh',
        backgroundSize: 'cover'
    }

   
    return  ( <div className="container"> 
    <div style={divStyle}>
        <h2>Nasa Photo of The Day</h2>
     <Card data={props.data}/>
        </div>
        
    </div>)
    
};

export default CardContainer;