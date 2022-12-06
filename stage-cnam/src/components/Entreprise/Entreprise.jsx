import React from 'react'
import Header from '../home/header/Header'
import Hero from '../Entreprise/entrepriseComponents/entrepriseHero'
import laBoiteImmo from '../../assets/laboiteimmo.png'
import './entreprise.css'
import TimeLine from './entrepriseComponents/TimeLine'

export default function entreprise() {
  return (
    <div className='entreprise-css'>
        <Header />
        <div className="img-div">
          <img className='laBoiteImmo' src={laBoiteImmo} alt="laBoiteImmo" />
        </div>
        <Hero />
        <TimeLine />
    </div>
  )
}
