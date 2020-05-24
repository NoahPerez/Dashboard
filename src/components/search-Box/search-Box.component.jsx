import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './search-Box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <header>
            <BrowserRouter>
                <Link to="/">
                    Your Brands<i class="fas fa-chevron-up"></i>
                </Link>
                <div class="search">
                    <span class="fa fa-search"></span>
                    <input
                        className="search"
                        type="search"
                        placeholder={placeholder}
                        onChange={handleChange}
                    />
                </div>
                <div class="icons-search">
                    <Link to="#"><i class="fas fa-th-large"></i><i class="fas fa-align-justify"></i></Link>
                </div>
            </BrowserRouter>
        </header>

    )
}