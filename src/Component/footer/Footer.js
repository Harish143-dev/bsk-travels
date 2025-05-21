import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='w-100'>
            <div className='footer-container d-flex align-items-center justify-content-around px-2 py-4'>
                <div className='d-flex flex-column'>
                    <h1 className='m-0 footer-heading'>BSK</h1>
                    <p className='m-0 footer-travels'>TRAVELS</p>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2 footer-column-res'>
                    <div className='d-flex align-items-center gap-2 justify-content-center'>
                        <span><FontAwesomeIcon icon={faPhone} className='location-icon fs-4 p-2' /></span>
                        <div>
                            <p className='m-0 fw-bold'>+91 8056503191</p>
                            <p className='m-0 fw-bold'>+91 9042082188</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2 justify-content-center'>
                        <span><FontAwesomeIcon icon={faEnvelope} className='location-icon fs-4 p-2' /></span>
                        <div>
                            <p className='m-0 fw-bold'>bsktravels@gmail.com</p>
                            <p className='m-0 fw-bold'>harsh143@gamil.com</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2 footer-column-res'>
                    <div className='d-flex gap-5 justify-content-center'>
                        <FontAwesomeIcon icon={faInstagram} className='fs-4 insta-icon' />
                        <FontAwesomeIcon icon={faFacebookF} className='fs-4 facebook-icon' />
                        <FontAwesomeIcon icon={faXTwitter} className='fs-4 twitter-footer-icon' />
                        <FontAwesomeIcon icon={faYoutube} className='fs-4 youtube-icon' />
                    </div>
                    <div>
                        <p>	© 2025 BSK Travels. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer