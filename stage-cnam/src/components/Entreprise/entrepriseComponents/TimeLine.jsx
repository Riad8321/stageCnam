import React from 'react'
import { Chrono } from "react-chrono";
import data from "./data";
import './time-line.css'

export default function TimeLine() {
  return (
        <div className='timeLine-component' style={{ width: "100%", height: "100vh" }}>
        <Chrono
          items={data}

          theme={{
            primary: 'black',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'black',
            titleColor: '#bed000',
            titleColorActive: 'black',
          }}
      

          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4000}
          cardHeight={150}
          mediaHeight={250}
        />
      </div>
  )
}