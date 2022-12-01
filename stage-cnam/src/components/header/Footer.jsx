import React from 'react'
import skyline from '../../assets/skyline.png'
import '../header/footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <img className='skyline' src={skyline} alt="Skyline" />
    </div>
  )
}
