import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';

import Card from '../Card/Card';
import './Content.css';
const Content = () => {
    const [singers,setSingers]= useState([]);
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data =>setSingers(data))
    },[])
    const handleHireButton=(person)=>{
        const persons=[...cards, person];
        setCards(persons); 
     }
                           
        
    return (
        <div className="content">
            <div className ="singers-container">
           
            {
                singers.map(singer=> <Singer 
                    key={singer._id}
                    singer={singer}
                    handleHireButton={handleHireButton}
                ></Singer>)
            }
            
            </div>

            <div className= "card-container">
                <Card cards={cards}> </Card>
            </div>
        </div>
    );
};

export default Content;