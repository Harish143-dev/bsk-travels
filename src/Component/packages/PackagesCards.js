import React, { useState } from 'react'

const PackagesCards = (props) => {
  return (
    <div className='packages-cards d-flex flex-column align-items-center text-center rounded-3 shadow-sm p-2 m-1'>
        <div>
            <img src={props.Packagesimg} className='pack-img' alt=''/>
        </div>
        <div>
            <p className='fs-5 fw-bold package-name'>{props.PackagesName}</p>
            <p className='package-discript'>{props.PackagesDisc}</p>
        </div>
        <div>
            <button className='px-3 py-1 rounded-3 border-0 fw-bold pack-btn-enq'>Enquries</button>
        </div>
    </div>
  )
}

export default PackagesCards