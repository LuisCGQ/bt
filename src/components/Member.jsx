import React from 'react'
import "../styles/Member.css"

const Member = ({name, img}) => {
    return (
        <div className="member">
            {img 
                ? <img src={img} alt="logo" />
                : <div className=''/>}
            <p>{name}</p>
        </div>
    )
}

export default Member