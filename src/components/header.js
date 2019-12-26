import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => (
    <div id="nav" className="header">
        <nav>
            <ul>
                <NavLink to='/projects'><li>PROJECTS</li></NavLink>
                <NavLink to='/research'><li>RESEARCH</li></NavLink>
                <NavLink to='/about'><li>ABOUT</li></NavLink>
                <NavLink exact to='/'><li>HOME</li></NavLink>
            </ul>
        </nav>
    </div>
)
  
export default Header