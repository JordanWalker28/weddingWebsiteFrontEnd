import React from 'react'
import "../../Css/Discover.css";

export default function Menu({menuItem, language}) { 
    return (
        <div className="item">{
            menuItem.map((item) =>{
                return <div className="item-con" key={item.id}>
                    <div className="item-container">
                        <img src={item.image} alt=""/>
                        <h2>{language ? item.title : item.title}</h2>
                        <p>{language ? item.description : item.descriptionGerman}</p>
                    </div>
                </div>
            })
        }
        </div>
    )
}