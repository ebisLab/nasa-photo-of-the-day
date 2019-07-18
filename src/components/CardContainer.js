import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card'
import Header from './Header'



function CardContainer(props){

    const[data,setData] = useState({})

    console.log(props, 'cardc props')
    console.log(data.url, 'data')
    const divStyle = {
        backgroundImage: 'url(' + data.url + ')' , 
        height: '100vh',
        backgroundSize: 'cover'
    }

    useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RboUaHZgXFAYDxkc1Req6H9KUWOUhFU21siaRiaJ')
    .then(res =>{
        console.log('res.data', res.data);
        // setTitle(res.data.title)
        // setExplanation(res.data.explanation)
        setData(res.data)
    }); 

  }, [])

   
    return  ( <div className="container"> 
    <div style={divStyle}>
        <h2>Nasa Photo of The Day</h2>
     <Card />
        </div>
        
    </div>)
    
};

export default CardContainer;