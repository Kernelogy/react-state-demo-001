import React from "react";
import { useState } from "react";
import { Container1 } from "./Container1";
import { Container2 } from "./Container2";

export function Effect1(){
    const [show, setShow] = useState(false)
    return (
        <>
            Click to toggle the Container <br></br>
            <input type="button" 
            value={ show ? "Hide Container" : "Show Container" } 
            onClick={ () => setShow(!show) }
            />
            <br></br>
            {
                show && 
                // <Container1 />
                <Container2 />
            }
        </>
    )
}