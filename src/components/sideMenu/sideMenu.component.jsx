import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './sideMenu.styles.css'



const SideMenu = () => (
    <div id="sidemenu">
        <nav>
            <BrowserRouter>
                <Link to="/"> <i className="fas fa-home"></i>Dashboard</Link>
                <Link to="/"> <i className="fas fa-tasks"></i>Content Management</Link>
            </BrowserRouter>
            <button className="dropdown-btn"><i className="fas fa-chart-pie"></i>Monitoring<i className="fas fa-chevron-up"></i>
            </button>
            <div className="dropdown-container">
                <div className="submenu"><i className="fas fa-lightbulb"></i>Content</div>
            </div>
            <button className="dropdown-btn"><i className="fas fa-cog"></i>Account<i className="fas fa-chevron-up"></i>
            </button>
            <div className="dropdown-container">
                <div className="submenu"><i className="fas fa-user-friends"></i>Users</div>
            </div>
        </nav>
    </div>
)

export default SideMenu;
