import React from 'react'
import './home.css'
import Header from '../home/header/Header'
import Hero from '../home/Hero/Hero'
import Footer from '../home/footer/Footer'


export default function Home() {
  return (
    <div className="home">
    <Header />
    <Hero />
    <Footer />
    </div>
  )
}
