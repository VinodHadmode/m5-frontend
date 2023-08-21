import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj = {
      email,
      password,
    }

    fetch("https://real-lime-penguin-cape.cyclic.cloud/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then((res) => res.json())
      .then((res) => {
        console.log();
        if (res.token) {
          navigate("/onboard")
        }else{
          alert("Wrong Credentials")
        }

      }).catch((err) => {
        console.log(err);
      })


    setEmail("")
    setPassword("")
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <input type="submit" value={"Submit"} />

      </form>
    </div>
  )
}

export default Login
