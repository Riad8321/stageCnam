import React from 'react'
import logoWeb from '../../assets/logoWeb.png'
import entreprise from '../Entreprise/Entreprise'
import '../header/header.css'
export default function Header() {
  return (
    <nav className='nav-bar'>
       <img className='logoWeb' src={logoWeb} alt="logo" />
       <ul className='menu-center'>
           <li>
            <a href={"#"}>HOME</a>
            </li>
           <li>
           <a href={"#"}>ENTREPRISE</a>
            </li>
           <li>
            <a href={"#"}>STAGE</a>
            </li> 
       </ul>
    </nav>
  )
}

