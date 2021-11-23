import React from 'react';
import {Animated} from "react-animated-css";

import './Singer.css';


const Singer = (props) => {
    const {name,picture,age,gender,salary,nationality}= props.singer;
    return (
        <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>

            <div className="singer-card" >
                <img src={picture} alt=""  />
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Nationality: {nationality}</p>
                <p>Salary: $ {salary}</p>
                <button onClick={()=> props.handleHireButton(props.singer)}><i class="fas fa-headphones"></i> Hire</button>
                    <div className="social-icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
            </div>
        </Animated>
    );
};

export default Singer;