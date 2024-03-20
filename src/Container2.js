import React, { useEffect, useState } from "react";


export function Container2(){

    const [users, setUsers] = useState(null)

    useEffect(()=>{
        //Set Users data on component loading
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            setUsers(json)
            console.log(json)
        });
        //Clear Users data on component Unloading
        return(()=>{
            setUsers(null)
        })
    }, [])
    return(
        <>
           <h1>The Users are: </h1>
           {
            users && 
            <ul>
                {
                    // users.map(d => (
                    //     <li key={d.id}>{d.id}. {d.name}</li>
                    // ))
                    users.map((d)=>{
                        return <li key={d.id}>{d.id}. {d.name}</li>
                    })
                } 
            </ul>
           }

        </>
    )
}