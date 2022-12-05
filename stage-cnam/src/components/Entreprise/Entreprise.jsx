import React from 'react'
import Header from '../home/header/Header'
import Hero from '../Entreprise/entrepriseComponents/entrepriseHero'
import Slideshow from './entrepriseComponents/slider/Slider'
import './entreprise.css'

export default function entreprise() {
  return (
    <div className='entreprise-css'> 
        <Header />
        <Slideshow />
    </div>
  )
}
