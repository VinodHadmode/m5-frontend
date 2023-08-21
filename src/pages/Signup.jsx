import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const obj = {
            email,
            password,
            confirm_password: cPassword
        }

        fetch("https://real-lime-penguin-cape.cyclic.cloud/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res.msg==="New user created!!"){
                    navigate("/login")
                }else{
                    alert("wrong credentials")
                }

            }).catch((err) => {
                console.log(err);
            })


        setEmail("")
        setPassword("")
        setCPassword("")
    }

    return (
        <div>
            <h2>Signup form</h2>

            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <input type="password" placeholder='confirm Password' value={cPassword} onChange={(e) => setCPassword(e.target.value)} /> <br />
                <input type="submit" value={"Submit"} />

            </form>
        </div>
    )
}

export default Signup
