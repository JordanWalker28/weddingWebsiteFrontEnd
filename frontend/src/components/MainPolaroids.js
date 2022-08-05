import React from 'react';
import "../Css/Index.css";
import left from "../img/Left.jpg"
import middle from "../img/Middle.jpg"
import right from "../img/Right.jpg"

export default function MainPolaroids() {
    return (
        <div className="collage">
            <img src={left} alt="students working" className="collage__image" />
            <img src={middle} alt="ceramics art supplies" className="collage__image"/>
            <img src={right} alt="dirty hands ceramics wheel" className="collage__image"/>
        </div>
    );
  }