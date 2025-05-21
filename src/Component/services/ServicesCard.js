import React from 'react'

const ServicesCard = (props) => {
    return (

        <div className='service-card d-flex flex-column align-items-center gap-2'>
            <div className='w-100 ser-img-con'>
                <img src={props.tour} className='service-img' alt='' />
            </div>
            <div className='d-flex flex-column align-items-center '>
                <p className='fs-4 fw-bold service-name'>{props.servicename}</p>
                <p className='service-disc fs-6'>{props.discript}</p>
            </div>
            <div>
                <button className='px-3 py-1 rounded-3 border-0 fw-bold serv-btn-enq'>Enquries</button>
            </div>
        </div>

    )
}

export default ServicesCard