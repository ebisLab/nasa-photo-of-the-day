import React from 'react';
import Card from './Card'
import 'semantic-ui-css/semantic.min.css'
import {Card as SemanticCard} from 'semantic-ui-css';



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
        <SemanticCard className="photo-card">
     <Card data={props.data}/>
     </SemanticCard>
        </div>
        
    </div>)
    
};

export default CardContainer;