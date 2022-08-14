import React from 'react'
import "../styles/Footer.css"
import logo from '../assets/logo.png'

const Footer = ()=> {
    return (
        <div className="footer container">
            <div className="d-flex align-items-center justify-content-between">
            <div className="flex-30">
                <img src={logo} alt="logo" className='footer__logo'/>
            </div>
            <div className="footer_links d-flex justify-content-between flex-40">
                <a href='/'>Mobile app</a>
                <a href='/'>Company</a>
                <a href='/'>About Us</a>
            </div>
            <p className='footer_copyright flex-30'>&copy; Used Cars 2021. As if were new!</p>
            </div>
        </div>
    )
}

export default Footer