import React from 'react'
import "../../Css/Discover.css";

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} key = {i} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;