import React from 'react';
import './Card.css';
const Card = (props) => {
    const {cards}=props;
    // console.log(cards);
     
    let totalQuantity= 0;
    let total = 0;

    
    for(const singer of cards){
      if (!singer.quantity) {
          singer.quantity=1;
      }
      total= total + singer.salary * singer.quantity;
      totalQuantity = totalQuantity + singer.quantity;

    }
   
    return (
        <div  className="cart-div">
            <h1>Singer Hired</h1>
            <h2>Total Count: {totalQuantity} </h2>
            <h2>Total Salary: $ {total} </h2>
            {
                cards.map(card=> 
                <div className="hired-list">
                    <img src= {card.picture} alt="" />
                    <p>{card.name}</p>
                </div>)
            }
            {/* <div className='hire-div'>
                <li>
                <img src={picture} alt="" />
                <h1> {name}</h1>
                </li>
                             
            </div> */}
           
           
        </div>
    );
};

export default Card;