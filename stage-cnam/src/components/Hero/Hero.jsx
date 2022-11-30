import React from 'react'
import logo from '../../assets/laboiteimmo.png'
import cnam from '../../assets/Logo-Cnam-min.jpg'
import region from '../../assets/Logo-Region-min.jpg'
import tvt from '../../assets/Logo-Tvt-min.png'
import tpm from '../../assets/Logo-Tpm-min.png'
import lft from '../../assets/Logo-Lft-min.png'
import boiteImmo from '../../assets/maxresdefault.jpg'
import bandeau2038 from '../../assets/Bandeau2038.png'


import '../Hero/hero.css'

export default function Hero() {
  return (
    <>
        <div className='hero'>
            <img src={logo} alt="Logo" />
        </div>
        <div className="hero-bis">
            <div className="logos">
                <img className='cnam' src={cnam} alt="Cnam" />
                <img className='tvt' src={tvt} alt="tvt" />
                <img className='region' src={region} alt="region" />
                <img className='lft' src={lft} alt="lft" />
                <img className='tpm' src={tpm} alt="tpm" />
            </div>
            <div className="cnam2038">
                <h2>Stage</h2>
                <p>Bonjour, moi c'est Riad </p>
                <p></p>
            </div>
        </div>
    </>
  )
}
