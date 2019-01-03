import React from 'react';

import logo from '../../data/images/antena.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Navbar.css';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/about"><img src={logo} style={{width: '5%'}}/></a></div>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Avatar</a></li>
                    <li><a href="/">Nome</a></li>
                    <li><a href="/">Sair</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;