import React from 'react';
import "../../Css/WeddingDay.css";

export default function WeddingTableListItem({time, name}) {
    return (
        <li>
            <span className="event-time">{time} - </span>
            <span className="event-name">{name}</span>
            <br />
            <span className="event-location"></span>
        </li>
    )
}