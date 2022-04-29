import React from 'react';
import './styles.css'

const Navbar = () => {
    return ( 
        <nav className='class-navbar'>
            <ul>
                <li>
                    <h2>EloyAragon Fotografia</h2>
                </li>
                <li>
                    <a href='/' title='link 1'>
                        Sobre mi

                    </a>
                </li>
                <li>
                    <a href='/' title='link 2'>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='/' title='link 3'>
                        Tienda
                    </a>
                </li>
            </ul>

        </nav>
    )
} 

export default Navbar;