import React from 'react'

export default function Nav(){
    return(
        <nav className='nav'>
            <div className="logo"><h3>LOGO</h3></div>
            <div className="menu">
                <ul>
                    <li>Features</li>
                    <li>Templates</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                        <li>Docs</li>
                    <li>Contact</li>
                </ul>
                <a className="btn" href="#" target="_blank" rel="noopener noreferrer">Stake <span>(50% APY)</span> </a>
                <a className="btn" href="#" target="_blank" rel="noopener noreferrer">Deploy Now </a>
            </div>
      </nav>
    )
}