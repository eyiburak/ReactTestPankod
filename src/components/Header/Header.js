import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
            </div>
            <NavMenu />
        </div>
    )
}

export default Header;