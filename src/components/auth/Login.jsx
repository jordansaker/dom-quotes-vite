import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postLogin } from './AuthModule'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginSubmit = (event) => {
    event.preventDefault()
    const postData = {
      email,
      password
    }
    postLogin(postData)
      .then(res => {
        if (res === 'Authenticated') {
          navigate("/dashboard")
        }
      })
      .catch(err => console.error(err))

  }

  return (
      <form onSubmit={loginSubmit} className='container-sm form-width p-4 mt-5'>
        <label className='mt-3' >Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='form-control mt-3'
        />
        <label className='mt-4' >Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='form-control mt-3'
        />
        <button className='btn btn-green'>Submit</button>
      </form>
  )
}

export default Login