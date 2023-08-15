import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <Link to="/">
                <img src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/15-cocktails/setup/src/logo.svg" alt='cocktaillogo'className='logo'/>
            </Link>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar