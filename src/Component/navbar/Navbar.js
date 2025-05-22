import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [activeLink, setactiveLink] = useState('#home')
    const [menuOpen, setMenuopen] = useState(false)
    const navLink = [
        { href: '#home', label: "Home" },
        { href: '#buses', label: "Buses" },
        { href: '#services', label: "Services" },
        { href: '#packages', label: "Packages" },
        { href: '#about', label: "About Us" },
        { href: '#contact', label: "Contact Us" }
    ]
    return (
        // Nav Bar--Container
        <nav className='w-100 position-fixed top-0 start-0 end-0 shadow-sm bg-body nav-container'>
            <div className=' w-100 d-flex justify-content-between px-3 py-1 align-items-center'>
                {/* Nav bar left */}
                <div className='left-navbar d-flex'>
                    <h2 className='bsk-heading fs-1'>BSK</h2>
                    <p className='bsk-travels'>TRAVELS</p>
                </div>
                {/* Nav bar center */}
                <div className='center-navbar d-flex gap-3 align-items-center'>
                    {
                        navLink.map((link, index) => {
                            return <a
                                className={`nav-item text-decoration-none position-relative ${activeLink === link.href ? 'nav-item-condition' : 'nav-item'}`}
                                onClick={() => setactiveLink(link.href)}
                                key={index} href={link.href}
                                id={link.href}>{link.label}</a>
                        })
                    }
                </div>
                {/* Nav bar responsive menu */}

                <div>
                    <button className='bg-body border-0 menu-btn' onClick={() => setMenuopen(!menuOpen)}>
                        {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>

                {/* Nav bar right */}
                <div className='right-navbar d-flex gap-2 align-items-center'>
                    <button className='btn-navbaar border-0 bg-body pe-2'>
                        <a href='/bsk-travels/login' className='btn-link'>Login</a>
                    </button>
                </div>
            </div>


            {/* mobile device menu open */}
            {
                menuOpen && (
                    <div className='mobile-list py-2'>
                        <div className=' mx-auto px-3'>
                            {navLink.map((link, index) => {
                                return <a
                                    className={`mob-nav-item text-decoration-none d-block shadow-sm p-2 m-1 ${activeLink === link.href ? 'mob-nav-condition' : 'mob-nav-item'}`}
                                    href={link.href} key={index}
                                    onClick={() => {
                                        setactiveLink(link.href)
                                        setMenuopen(!true)
                                    }
                                    }>{link.label}</a>
                            })}
                        </div>
                        <div className='p-3'>
                            <button className='btn-navbaar px-3 py-1 border-0 rounded-3 d-block w-100 mb-2'>
                                <a href='/login' className='btn-link'>Login</a>
                            </button>
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar