import React, { Component, useEffect, useState } from 'react'
import Cardd from './homeCard'



import NavBar from '../SharedComponents/NavBar'

const Home = () => {
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        let options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ pk: id })
        };
        let path = 'http://127.0.0.1:8000/user/'
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log("mydataa", data);
                setUserdata(data)
            })
    }, [])

    console.log('userdata', userdata)
    return (
        <div >
            <NavBar />
            {  userdata.map((user, i) => (
                <Cardd user={user} key={i} />
            ))}


        </div>
    )
}



export default Home;