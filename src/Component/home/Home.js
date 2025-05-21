import { React, useState } from 'react'
import './Home.css'
import eicherhome from '../../asset/eicher-home.JPG'
import mahindrahome from '../../asset/mahindra-home.JPG'
import eicherhome2 from '../../asset/eicher2-home.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [enqMenu, setEnqMenu] = useState(false)
  return (
    <div id="home" className='Home-container w-100 pt-5 d-flex'>
      <div className='home-right-content pt-5 w-50 d-flex flex-column gap-4 mt-5 px-5'>
        <div className='home-head d-flex align-items-baseline justify-content-center'>
          <h1 className='bsk-heading'>BSK</h1>
          <h3 className='bsk-heading-travels fw-bold'>TRAVELS</h3>
        </div>
        <div className='w-100 text-center'>
          <h1 className='fw-bolder'>LIFE IS A JOURNEY ENJOY THE RIDE</h1>
        </div>
        <div className='discript fw-bold fs-6'>
          <p>Our Travels is one best travels consider by a customer , so our promise is keep ride a comfort and safety</p>
        </div>
        <div className='w-100 text-center'>
          <button className='rounded-3 fs-5 fw-bold btn-home' onClick={() => setEnqMenu(!enqMenu)}><span className=' me-2'><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>Enquries</button>
        </div>
      </div>
      <div className='home-left-content w-50 d-flex justify-content-center align-items-center gap-4 pt-5 mt-5'>
        <img src={eicherhome} className='home-img mb-5' alt='' />
        <img src={mahindrahome} className='home-img mt-5' alt='' />
        <img src={eicherhome2} className='home-img mb-5' alt='' />
      </div>
      {/* enquries form  */}
      {/* {
        enqMenu && (
          <div className='w-50 bg-body rounded-3 shadow-lg enq-container'>
            <button className='border-0 bg-body p-3 fs-5 close-btn' onClick={() => setEnqMenu(!enqMenu)}><FontAwesomeIcon icon={faXmark} /></button>
            <div className='p-4'>
              <div className='p-4 text-center'>
                <h1 className='fw-bold form-head'>Form</h1>
              </div>
              <div className='d-flex justify-content-center gap-5'>
                <div className='d-flex flex-column align-items-center justify-content-center gap-4'>
                  <div className='d-flex gap-3 align-items-center justify-content-between'>
                    <label className='label-home fw-bold'>Name</label>
                    <input type='text' className='inp-field px-2' />
                  </div>
                  <div className='d-flex gap-3 pe-3  align-items-center'>
                    <label className='label-home fw-bold'>Number</label>
                    <input type='text' className='inp-field' />
                  </div>
                  <div className='d-flex gap-3 align-items-center'>
                    <label className='label-home fw-bold'>Email</label>
                    <input type='text' className='inp-field' />
                  </div>
                </div>
                <div className='d-flex justify-content-center gap-2 flex-column'>
                  <label className='label-home fw-bold'>Discription</label>
                  <textarea className='text-area px-2'></textarea>
                </div>
              </div>
            </div>
            <div className='p-4 text-center'>
              <button className='border-0 rounded-3 px-2 py-1 fw-bold btn-enq-sub'>Submit</button>
            </div>
          </div>
        )
      } */}
    </div>
  )
}

export default Home