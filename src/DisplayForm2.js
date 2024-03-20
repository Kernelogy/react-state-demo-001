import React, { useEffect } from "react";

export function DisplayForm2({person}){
    useEffect(()=>{
        console.log("Display Form Loading")
    })
    return (
        <>
        <h1>
            The Given Data are :
        </h1>
        Username : { person.username } <br></br>
        Email : { person.email } <br></br>
        Mobile : { person.mobile } <br></br>
        Password : { person.password } <br></br>
        </>
    )

}