import React from "react";

export function DisplayForm({ username, email, mobile, password}){
    return(
        <>
        <h1>
            The Given Data are :
        </h1>
        Username : { username } <br></br>
        Email : { email } <br></br>
        Mobile : { mobile } <br></br>
        Password : { password } <br></br>
        </>
    )
}