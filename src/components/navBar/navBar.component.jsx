import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navBar.styles.css';

const SideMenu = () => (
    <React.Fragment>
        <div className="img"><img src={Logo} alt="logo" /></div>
        <div className="navbar">
            <BrowserRouter>
                <Link to="/">
                    <div className="user-img"></div>
                </Link>
                <Link to="/" className="text">TH</Link>
                <span className="circle">4</span><Link to="/" >
                    <i className="fas fa-bell"></i></Link>
            </BrowserRouter>
        </div>
    </React.Fragment>
)

export default SideMenu;