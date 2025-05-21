import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'
import tourimg from '../../asset/eicher-home.JPG'
import corparateimg from '../../asset/mahindra-home.JPG'
import eventimg from '../../asset/eicher2-home.JPG'

const Services = () => {
    return (
        <div className='Services-container w-100 p-5' id='services'>
            <div className='text-center p-5'>
                <h1 className='fw-bold services-head'>Services</h1>
            </div>
            <div className='services-card-container d-flex align-items-center justify-content-between gap-5'>
                <ServicesCard
                    tour={tourimg}
                    servicename='Tours and Trips'
                    discript='Experience the joy of exploration with BSK Travels. From serene landscapes to vibrant cities, our curated tours cater to every travelers dream destination." "Journey with comfort and style. BSK Travels ensures every tour is packed with adventure, fun, and unforgettable memories.'
                />
                <ServicesCard
                    tour={corparateimg}
                    servicename='Corporates'
                    discript='Elevate your business travel experience with BSK Travels. Our efficient corporate transport solutions keep you on schedule and stress-free." "Professionalism meets comfort. Trust BSK Travels for seamless corporate transportation tailored to your team’s needs.'
                />
                <ServicesCard
                    tour={eventimg}
                    servicename='Events'
                    discript='BSK Travels ensures your events run smoothly with reliable and spacious transport options. Let us handle the logistics while you enjoy the moment." "Create lasting memories without the travel hassle. From weddings to grand celebrations, BSK Travels offers flawless event transportation services'
                />
            </div>
        </div >
    )
}

export default Services