import React, {useState} from 'react';
import logo from '../assets/logo.png'
import "../styles/Navbar.css"


const Navbar = () => {
    const [hide, setHide] = useState(false)

    return (
        <div className="navbar">
            <div className="navbar__flex container d-flex align-items-center justify-content-between">
            <div className="navbar__options d-flex align-items-center justify-content-between">
                <img src={logo} alt="logo" className='navbar__logo'/>
                <div className="navbar__desktop">
                    <a href='/'>Shop</a>
                    <a href='/'>Sell/Trade</a>
                    <a href='/'>Finance</a>
                    <a href='/'>Support</a>
                </div>
            </div>
            <div className="navbar__buttons d-flex">
                <button className='button-secondary'>Find your car</button>
                <button className='button-primary'>Contact us</button>
            </div>
            <button className='navbar__show button-secondary' onClick={()=>{setHide(!hide)}}>{hide? <span>&#9660;</span> : <span>&#9650;</span>}</button>
            </div>
            <div className={hide ? "navbar__hide" : "navbar__mobile container"}>
                <a href='/'>Shop</a>
                <a href='/'>Sell/Trade</a>
                <a href='/'>Finance</a>
                <a href='/'>Support</a>
            </div>
        </div>
    )
}

export default Navbar