import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logoWeb from '../../assets/logoWeb.png'
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

