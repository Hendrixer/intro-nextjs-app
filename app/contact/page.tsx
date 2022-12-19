'use client'

import { useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    console.log('hey')
  }


  return <div>
    <form onSubmit={handleSubmit}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit">submit</button>
    </form>
  </div>
}