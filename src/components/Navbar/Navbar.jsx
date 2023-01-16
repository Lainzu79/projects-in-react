import React from 'react';
import LogoSpotify from '../../assets/icons8-spotify.svg';
import { FaFacebookF , FaReact } from "react-icons/fa";
import './Navbar.scss';

const Navbar = () => {

    const addLinkBtn = () =>{
       document.location.href = '#';
    }

    return (
        <header className='header-container'>
            <img src={LogoSpotify} alt="logo-spotify" className="header-container__logo" />

            {/*---Links---*/}
            <nav className="nav-container">
                <li className="nav-container__li"><a href="#" className="nav-container__a"><FaFacebookF/>Facebook</a></li>
                <button className="nav-container__btn" onClick={addLinkBtn}><FaReact/>Source Code</button>
            </nav>
        </header>
    );
}

export default Navbar;
