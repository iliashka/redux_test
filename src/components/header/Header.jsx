import React from 'react';
import {Link} from "react-router-dom";
import 'materialize-css'

function Header() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue lighten-2">
                    <a href="#" className="brand-logo">Users base</a>
                    <ul id="nav-mobile" className="right hide-on-med">
                        <li><Link to='/createPage'>Create</Link></li>
                        <li><Link to='/basePage'>Base</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;