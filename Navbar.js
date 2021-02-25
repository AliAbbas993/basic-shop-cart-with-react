import React, { Component } from 'react';

const Navbar = (props) => {
    console.log('Navbar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">
                Logo
            </a>
            <div className="d-flex">
                cart: <span className="ml-3"> {props.count}</span>
            </div>
        </nav>
    );
}
 
export default Navbar;
