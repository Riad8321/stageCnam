import React from 'react'
import logo from '../../../assets/laboiteimmo.png'
import cnam from '../../../assets/Logo-Cnam-min.jpg'
import region from '../../../assets/Logo-Region-min.jpg'
import tvt from '../../../assets/Logo-Tvt-min.png'
import tpm from '../../../assets/Logo-Tpm-min.png'
import lft from '../../../assets/Logo-Lft-min.png'
import imgRightIntroduction from '../../../assets/imgRightIntroduction.png'
import './hero.css'

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
            <div className="hero-text">
                <h2>Bonjour, c'est Riad 👋🏼</h2>
                <p>J'ai effectué mon stage dans la société La Boite Immo, située à Hyères </p>
                <p><span>La Boîte Immo,</span> spécialiste dans la conception de sites immobiliers, de logiciel immobilier adapté leurs besoins et de référencement en 1ère page de Google</p>
                <img className='imgRightIntroduction' src={imgRightIntroduction} alt="imgRightIntroduction" />
            </div>
        </div>
    </>
  )
}
