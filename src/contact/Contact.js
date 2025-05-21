import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div id='contact' className='mb-5'>
            <div>
                <div className='p-5 text-center'>
                    <h1 className='contact-heading fw-bold'>Contact</h1>
                </div>
                <div className='w-100 d-flex align-items-center contact-container'>
                    <div className='left-container w-50'>
                        <div className='d-flex flex-column gap-5 justify-content-center'>
                            <div className='d-flex justify-content-around contact-add-col'>
                                <div className='d-flex align-items-center flex-column justify-content-center'>
                                    <div className='contact-info text-center p-3'>
                                        <span><FontAwesomeIcon icon={faLocationDot} className='location-icon fs-4 p-2' /></span>
                                        <p className='m-0'>Mandapam</p>
                                        <p className='m-0'>Ramanathapuram</p>
                                        <p className='m-0'>TamilNadu</p>
                                    </div>
                                    <div className='contact-info text-center p-3'>
                                        <span><FontAwesomeIcon icon={faPhone} className='location-icon fs-4 p-2' /></span>
                                        <p className='m-0'>+91 8056503191</p>
                                        <p className='m-0'>+91 9042081188</p>
                                    </div>
                                </div >
                                <div className='d-flex align-items-center flex-column justify-content-center'>
                                    <div className='contact-info text-center p-3'>
                                        <span><FontAwesomeIcon icon={faEnvelope} className='location-icon fs-4 p-2' /></span>
                                        <p className='m-0'>bsktravels@gmail.com</p>
                                        <p className='m-0'>harish143@gmail.com</p>
                                    </div>
                                    <div className='contact-info text-center p-3'>
                                        <span><FontAwesomeIcon icon={faClock} className='location-icon fs-4 p-2' /></span>
                                        <p className='m-0 fs-4' >24 X 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 d-flex gap-5 justify-content-center'>
                                <FontAwesomeIcon icon={faInstagram} className='fs-1 insta-icon' />
                                <FontAwesomeIcon icon={faFacebookF} className='fs-1 facebook-icon' />
                                <FontAwesomeIcon icon={faXTwitter} className='fs-1 twitter-icon' />
                                <FontAwesomeIcon icon={faYoutube} className='fs-1 youtube-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='right-container w-50 d-flex justify-content-center align-items-center'>
                        <div className='form-container d-flex flex-column shadow-lg align-items-center px-5 pt-5 pb-3 gap-4'>
                            <div className='d-flex align-items-center form-con'>
                                <label className='label-contact fw-bold'>Name</label>
                                <input type='text' className='inp-field-contact px-2' />
                            </div>
                            <div className='d-flex align-items-center form-con'>
                                <label className='label-contact fw-bold'>Email</label>
                                <input type='text' className='inp-field-contact px-2' />
                            </div>
                            <div className='d-flex align-items-center form-con'>
                                <label className='label-contact fw-bold'>Phone Number</label>
                                <input type='text' className='inp-field-contact px-2' />
                            </div>
                            <div className='d-flex align-items-center form-con'>
                                <label className='message-contact fw-bold'>Message</label>
                                <textarea className='px-2'></textarea>
                            </div>
                            <button className='contact-btn border-0 px-2 py-1 rounded-3 fw-bold'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact