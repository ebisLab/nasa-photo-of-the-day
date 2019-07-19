import React from 'react';
import Card from './Card'
import { Card as SemanticCard } from 'semantic-ui-react'



function CardContainer(props){


    // console.log(props, 'cardc props')
    const divStyle = {
        backgroundImage: 'url(' + props.data.url + ')' , 
        height: '100vh',
        backgroundSize: 'cover'
    }

   
    return  ( 
        <div className="container"> 
            <div style={divStyle}>
            {/* <h2>Nasa Photo of The Day</h2> */}
            {/* <SemanticCard header="Nasa Photo of The Day" description="random card"/> */}
            {/* <SemanticCard className="ui link card"> */}
            {/* <SemanticCard.Content link
    header='Rick Sanchez'
    meta='Scientist'
    description={
      'Rick is a genius scientist whose alcoholism and reckless'} /> */}

            {/* <Card data={props.data} 
                    title={props.title}
                    date={props.date}
                    explanation={props.explanation}
                    copyright={props.copyright}
                    /> */}
                    {/* <SemanticCard data={props.data} 
                    header={props.title}
                    date={props.date}
                    explanation={props.explanation}
                    copyright={props.copyright}
                    /> */}
                    <Card data={props.data} />
            {/* </SemanticCard> */}
     
        </div>
        
    </div>)
    
};

export default CardContainer;