import React, { useEffect } from "react";

export function Container1(){
    
    function onLoad(){
        console.log("Container Loading...")
    }
    function onUnload(){
        console.log("Container Unloading...")
    }
    useEffect(onLoad)
    
    // useEffect(()=>{
    //     console.log("Container Loading...")
    //     return(()=>{
    //         console.log("Container Unloaded...")
    //     })
    // })
    return(
        <>
            <h1>This is a Container</h1>
        </>
    )
}