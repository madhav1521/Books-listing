import React from 'react'

export default function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <div>
                    <h1>Bookish</h1>
                </div>
                <div className='sub-nav'>
                    <div>About</div>
                    <p>Contact Us</p>
                    <button className='logout-btn'>Logout</button>
                </div>
            </header>
        </React.Fragment>
    )
}
