import React from 'react'
import './About.css'
import cruzioabout from '../../asset/cruzioabout.JPG'


const About = () => {
    return (
        <div id='about'>
            <div className='about-container'>
                <div className='text-center p-5'>
                    <h1 className='about-headig fw-bold'>About Us</h1>
                </div>
                <div className='about-us-container w-100 d-flex px-5 align-items-center'>
                    <div className='left-container w-50 px-5 py-4 bg-body shadow-lg'>
                        <div className='about-para'>
                            <p className='fw-bold'> Welcome to BSK Travels, your trusted partner for unforgettable journeys!
                                We specialize in creating tailored tour packages that blend comfort,
                                adventure, and cherished memories. Whether it’s a peaceful retreat
                                into nature or an exciting city escape, we ensure every trip is seamless and enjoyable.</p>
                            <p className='fw-bold'>At BSK Travels, we believe travel is about the stories you collect along the way. With a dedicated team,
                                a fleet of comfortable buses, and easy booking options, we make exploring the world delightful and
                                hassle-free. Let’s create your next great adventure together!</p>
                        </div>
                    </div>
                    <div className='right-container w-50 py-3 ps-3'>
                        <div>
                            <img src={cruzioabout} alt='' className='w-100 rounded-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About