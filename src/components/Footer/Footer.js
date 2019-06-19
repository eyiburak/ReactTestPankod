import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className="Footer">
            <NavMenu />
            <div className="Logo">
                <NavLink to="/">
                    <img src={Logo} aria-hidden="true" alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default Footer;