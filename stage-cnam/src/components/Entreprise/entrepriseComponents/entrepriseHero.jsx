import React from 'react'

import photoLaBoiteImmo from '../../../assets/imagesEntreprise/photoLaBoiteImmo.jpg'
import './entrepriseHero.css'

export default function entrepriseHero() {
  return (
    <>
      <div className="hero-entreprise">
        <img className='photoLaBoiteImmo' src={photoLaBoiteImmo} alt="photoLaBoiteImmo" />
      </div>
    </>
  )
}
