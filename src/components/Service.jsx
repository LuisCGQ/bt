import React from 'react';
import "../styles/Service.css"

const Service = ({img, title, body, link})=> {
    return (
        <div className="service">
            <img className='service__img' src={img} alt="" />
            <h3 className='service__title'>{title}</h3>
            <p className='service__body'>{body}</p>
            <a className='service__link' href={link}>Learn more</a>
        </div>
    )

}

export default Service