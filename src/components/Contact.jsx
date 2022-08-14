import React from 'react'
import "../styles/Contact.css"

const Contact = ()=> {
    return (
        <div className="contact">
            <div className="contact__data container d-flex justify-content-between align-items-center">
                <p>We have 24/7 service, check the available models, if you have any questions you can contact us.</p>
                <div className="contact__buttons d-flex">
                    <button className="button-primary">Find your car</button>
                    <button className="button-secondary">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Contact