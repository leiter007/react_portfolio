import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
            <Link className="main-link hover" to='/'>My Portfolio</Link>
            </h1>
            <ul className="ul-link">
                <li className="header-li"><NavLink className="nav-link hover" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                <li className="header-li"><NavLink className="nav-link hover" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
                <li className="header-li"><NavLink className="nav-link hover" activeStyle={{fontWeight: "bold"}} to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header