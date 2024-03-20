import React from "react";
import { useState } from "react";
import { DisplayForm2 } from "./DisplayForm2";

export function Signup3(){

    const [person, setPerson] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""
    })


    const handleFormSubmit = (e) => {
        setPerson( {
            username: e.target.username.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            password: e.target.password.value
        })      
        console.log(e.target.username)
        e.preventDefault();
    }
    return(
        <>
            <form onSubmit={ (e) => handleFormSubmit(e) }>
                <input placeholder="Username" type="text" name="username"/> <br />
                <input placeholder="email@example.com" type="text" name="email" /> <br />
                <input placeholder="9876543210" type="mobile" name="mobile" /> <br />
                <input placeholder="password" type="password" name="password" /> <br />
                <button type="submit">Signup</button>
            </form>
            {
                person.username && 
                <DisplayForm2 person={ person } />
            }
            
            {/* 
            {
                person.username && 
                <>
                    The given username is : {person.username} <br></br>
                    The email is : { person.email }
                </>
            } */}
        </>

    )
}