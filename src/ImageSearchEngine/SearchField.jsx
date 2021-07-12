import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './style.css';

function SearchField() {

    const [input,setInput] = useState('');
    const focusInput = useRef();
    const [img, setImg] = useState([]);


    useEffect(()=>{
        focusInput.current.focus();
    },[])
    
    const eventChange = (e)=>{
        var data = e.target.value;
        setInput(data);
    }

    const inputData = ()=>{
        console.log(input);
        const clientId = '&client_id=gVWTi6r-d9CXyIuwaj-Kxwwoin4p1tRra1SEdsPW8b4';
        const URL = 'https://api.unsplash.com/search/photos?page=1&per_page=48&query='+input+'&client_id'+clientId

        axios.get(URL)
            .then((res) => {
                console.log(res.data);
                setImg(res.data.results);
        })
    }

    return (
        <div className="container text-center pt-5">
            <input className="bx-outline" type="text" id="" ref={focusInput} onChange={eventChange} value={input}/>
            <input type="submit" value="Search" onClick={inputData}/>

            <div className="d-flex align-items-center justify-content-between flex-wrap pt-5">
                {img.map((images)=>{
                    return(
                        <img src={images.urls.regular} key={images.id} alt="img"/>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchField
