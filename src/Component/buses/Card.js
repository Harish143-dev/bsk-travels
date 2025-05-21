import React from 'react'

const Card = (props) => {
    return (
        <div className='d-flex align-item-center justify-content-center gap-3 p-4 mb-5 buses-card'>
            <div className=' text-center'>
                <img src={props.busesimg} className='buses-img' alt='' />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                <p className='fs-4 fw-bold buses-brand'>{props.buses}</p>
                <p className='fs-6 fw-bold spec'>{props.p1}</p>
                <p className='fs-6 fw-bold spec'>{props.p2}</p>
                <p className='fs-6 fw-bold spec'>{props.p3}</p>
                <p className='fs-6 fw-bold spec'>{props.p4}</p>
            </div>
        </div>
    )
}

export default Card