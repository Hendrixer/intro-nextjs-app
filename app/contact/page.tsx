'use client'
import {useState} from 'react'

const Contact =  () => {
    const [email,setEmail] = useState("")
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        await fetch('/api/contact',{
            method:'POST',
            body:JSON.stringify({email}),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        console.log("Hey Thanks")

    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Input Email</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
    <button type="submit">Submit Here</button>
    </form>
    </div>
  )
}

export default Contact