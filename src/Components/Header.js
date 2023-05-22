import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <div>
                    <h1>Bookish</h1>
                </div>
                <ul className='sub-nav'>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    <li><NavLink to='/add-books'>Add Books</NavLink></li>
                    <li><NavLink to='/all-books'>All Books</NavLink></li>
                    <li><button className='logout-btn'>Logout</button></li>
                </ul>
            </header>
        </React.Fragment>
    )
}
