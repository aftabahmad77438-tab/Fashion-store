import React, { useState } from 'react'
import './Login.css';

const Loginsignup = () => {


  const [state, setstate] = useState('signup');
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  })

  const formhandler = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }


  const login = async () => {
  let responseData = await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formdata),
  }).then((res) => res.json())

  if (responseData.success) {
    localStorage.setItem('auth-token', responseData.token)
    window.location.replace('/') // redirect to home page after login
  } else {
    alert(responseData.error)
  }
}

const signup = async () => {
  let responseData = await fetch('http://localhost:4000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formdata),
  }).then((res) => res.json())

  if (responseData.success) {
    localStorage.setItem('auth-token', responseData.token)
    window.location.replace('/')
    alert('Welcome back!')
  } else {
    alert(responseData.error)
  }
}

  return (

    <div className='signup'>

      <div className='page'>



        <h1>{state}</h1>

        <div className='inputs'>

          <input
            type='text'
            name='username'
            value={formdata.username}
            onChange={formhandler}
            placeholder='Your name'
            required
          />
          

         {state ==='login'?'': (<input
            type='email'
            name='email'
            value={formdata.email}
            onChange={formhandler}
            placeholder='Your email'
            required
          />
         )}

          <input
            type='password'
            name='password'
            value={formdata.password}
            onChange={formhandler}
            placeholder='Password'
            required
          />
          <button onClick={() => { state === 'login' ? login() : signup() }}>Continue</button>

        </div>

        <div className='checkbox'>
          <input type='checkbox'></input>
          <p>By continuing i agree to the terms of use and policy.</p>

        </div>

        <div className='data'>
          {state === 'login' ? <p className='one'>Dont have any acount? <span onClick={() => { setstate('signup') }}> Sign up</span></p> : <p className='one'>Already have an acount? <span onClick={() => { setstate('login') }}> Login here</span></p>}


        </div>






      </div>
    </div>


  )
}

export default Loginsignup
