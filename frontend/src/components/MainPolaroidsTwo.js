import React from 'react';
import "../Css/Index.css";
import left from "../img/LeftGift.jpg"
import middle from "../img/RightGift.jpg"

export default function MainPolaroidsTwo() {
    return (
        <div className="collage2">
            <img src={left} alt="students working" className="collage2__image" />
            <img src={middle} alt="ceramics art supplies" className="collage2__image"/>
        </div>
    );
  }