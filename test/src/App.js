import axios from 'axios'
import React from 'react'

export default function App() {
  const usernameRef = React.useRef(null)
  const emailRef = React.useRef(null)
  const fileRef = React.useRef(null)

  const sendDataToBE = async () => {
    const formData = new FormData()
    formData.append('username', usernameRef.current.value)
    formData.append('email', emailRef.current.value)
    formData.append('file', fileRef.current.files[0])

    try {
      await axios.put('/api', formData)
    } catch {
      alert('endpoint not found')
    }
  }

  return (
    <>
      <input ref={usernameRef} placeholder='username' />
      <input ref={emailRef} placeholder='email' />
      <input ref={fileRef} type='file' />
      <button onClick={() => sendDataToBE()}>Send data</button>
    </>
  )
}
