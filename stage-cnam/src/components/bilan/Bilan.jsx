import React from 'react'
import { AttentionSeeker } from "react-awesome-reveal";
import Header from '../home/header/Header'
import bilanImage from '../../assets/bilan.jpg'
import './bilan.css'
import 'animate.css';

export default function Bilan() {
  return (
    <>
        <Header />
        <h1>Est-ce que tu as aimé cet immersion au sein de La boite Immo</h1>
        <h2 className="animate__animated animate__shakeY animate__delay-2s	2s">Oui carrément</h2>

        <div className="bilan-image">
          <img className='bilan-img' src={bilanImage} alt="" />
        </div>
        <div className='bilan'>
            Bilan du stage
        </div>
    </>
  )
}
