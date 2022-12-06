import React from 'react'
import { Link } from 'react-router-dom'
import logoWeb from '../../../assets/logoWeb.png'
import './header.css'
export default function Header() {
  return (
    <main>
    <nav className='nav-bar'>
       <img className='logoWeb' src={logoWeb} alt="logo" />
       <ul className='menu-center'>
           <li>
           <Link to="/">HOME</Link>
            </li>
           <li>
           <Link to="/entreprise">ENTREPRISE</Link>
            </li>
           <li>
           <Link to="/lbi">LBI</Link>
            </li>
            <li>
           <Link to="/metier">LE MÉTIER</Link>
            </li>
       </ul>
    </nav>
    </main>
  )
}

