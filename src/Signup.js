import React from "react";
import { useState } from "react";
import { DisplayForm } from "./DisplayForm";

export function Signup(){

    const [username, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = (e) => {
        // alert("Submitting form")
        setUserName(e.target.username.value)
        setEmail(e.target.email.value)
        setMobile(e.target.mobile.value)
        setPassword(e.target.password.value)
        e.preventDefault();
    }
    return(
        <>
            <form onSubmit={ (e) => handleFormSubmit(e) }>
                <input placeholder="Username" type="text" name="username" onChange={ (e) => setUserName(e.target.value) }/> <br />
                <input placeholder="email@exaple.com" type="text" name="email" /> <br />
                <input placeholder="9876543210" type="mobile" name="mobile" /> <br />
                <input placeholder="password" type="password" name="password" /> <br />
                <button type="submit">Signup</button>
            </form>
        {
            username && email &&
            <DisplayForm username={ username } email={ email } mobile={ mobile } password={ password } />

        }

{/* 
            {
                username && 
                <>
                    The Username is { username }
                </>
            }

            { username && email &&
                <>
                    Welcome { username}
                    <br></br>
                    Your email id is { email } and moble is { mobile }
                    <br></br>
                    The Given password is { password }
                </>              
            } */}
        </>
    )
}