import React from 'react'
import "../css/Header.css"
import logo from '../imge/logo.png'
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <nav className='container'>
                    <div className='navbar-logo'>

                        <Link to="/"><img src={logo} /></Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                   <Link className='navbar-link' to="haqqimizda">Haqqımızda </Link>
                            </li>
                            <li>
                                <Link className='navbar-link' to="tedris">Tədris</Link>
                            </li>
                            <li>
                                <Link className='navbar-link' to="karyera">Karyera</Link>
                            </li>
                            <li>
                                <Link className='navbar-link' to="blog">Blog</Link>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <button className='nav-btn'>
                            Bizimlə Əlaqə
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
