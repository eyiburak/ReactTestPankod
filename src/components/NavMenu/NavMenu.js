import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavMenu.css';


const NavMenu = () => {
    return (
        <div className="NavMenu">
            <ul className="NavLinks">
                <li>
                    <NavLink to="/" className="Link">Anasayfa</NavLink>
                </li>
                <li>
                    <NavLink to="/hakkimizda" className="Link">Hakkımızda</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;