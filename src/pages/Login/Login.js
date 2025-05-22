import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [login, setLogin] = useState("Sign In")
    return (
        <div className='d-flex justify-content-center align-items-center login-body'>
            <div className='login-container bg-body p-5 shadow-lg'>
                <div className='Login-head mb-5 text-center'>
                    {<h1 className={`fw-bold ${login === 'Sign In' ? 'red' : 'blue'}`}>{login}</h1>}
                </div>
                <div className='form-login'>
                    {login === 'Sign Up' ? <div className='field-container mb-4'>
                        <label className='login-label fw-bold' for='name'>Name</label>
                        <input type='text' className='inp-field px-2 py-1' id='name' />
                    </div> : <></>}
                    <div className='field-container mb-4'>
                        <label className='login-label fw-bold' for='email'>Email</label>
                        <input type='number' className='inp-field px-2 py-1' id='email' />
                    </div>
                    <div className='field-container mb-1'>
                        <label className='login-label fw-bold' for='pass'>Password</label>
                        <input type='password' className='inp-field px-2 py-1' id='pass' />
                    </div>
                    <div className='text-end'>
                        <a href=' ' className='need-help'>Need Help ?</a>
                    </div>
                    <div className='text-center p-2'>
                        {<button className={`border-0 rounded-3 px-3 py-1 btn-log ${login === 'Sign In' ? 'btn-red' : 'btn-blue'}`}>
                            <a href=' ' className='text-decoration-none btn-login-link'>{login}</a>
                        </button>}
                    </div>
                </div>
                <div className='mt-3'>
                    {login === 'Sign In' ? <span className='other-opt'>
                        Create a new Account <a href=' ' className='other-opt-link-up' onClick={() => setLogin('Sign Up')}>
                            Sign Up</a></span> : <></>}
                    {login === 'Sign Up' ? <p className='other-opt'>
                        Already have a Account <a href=' ' className='other-opt-link-in' onClick={() => setLogin('Sign In')}>
                            Sign In</a></p> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Login