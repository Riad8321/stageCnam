import React from 'react'
import { Chrono } from "react-chrono";
import data from "./data";

export default function TimeLine() {
  return (
        <div style={{ width: "100%", height: "90vh" }}>
        <Chrono
          items={data}

          theme={{
            primary: 'black',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'black',
            titleColor: '#bed000',
            titleColorActive: 'white',
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