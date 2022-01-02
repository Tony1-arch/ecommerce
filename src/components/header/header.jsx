import React from 'react'
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss'
const Header = () => {
    return (
        <div className='nav-menu container'>
            <div className="logo">
                <Link to='/'>TONY-BAGS</Link>
            </div>
            <ul>
                <li>
                <Link to='/'>
                    Home
                </Link>
                </li>
                <li>
                <Link to='/shop'>
                    Shop
                </Link>
                </li>
                
            </ul>
            <CartIcon/>
        </div>
    )
}

export default Header
