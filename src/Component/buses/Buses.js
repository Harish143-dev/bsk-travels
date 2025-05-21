import React from 'react'
import './Buses.css'
import eicherhome from '../../asset/eicher-home.JPG'
import cruzio from '../../asset/mahindra-home.JPG'
import Card from './Card'

const Buses = () => {
  return (
    <div id='buses'>
      <div className='text-center p-5 mt-5'>
        <h1 className='fw-bold busesHead'>Buses</h1>
      </div>
      <div className='buses-container w-100'>
        <div className='Buses-card-container d-flex justify-content-around align-items-center gap-5'>
          <Card buses='Eicher Startline'
            p1='19 Pushback Seater'
            p2='DJ Lighting'
            p3='Comfortable'
            p4='Multimedia'
            busesimg={eicherhome}
          />
          <Card buses='Mahindra Cruzio'
            p1='19 Pushback Seater'
            p2='DJ Lighting'
            p3='Comfortable'
            p4='Multimedia'
            busesimg={cruzio}
          />
        </div>
      </div>
    </div>
  )
}

export default Buses