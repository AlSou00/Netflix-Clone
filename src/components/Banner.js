import React from 'react';
import {useState,useEffect} from 'react'
import axios from "../axios";
import requests from '../requests';
import '../App.css';
import {FaPlus,FaPlay}from "react-icons/fa";
import Navbar from './Navbar'


const base_url="https://image.tmdb.org/t/p/original/"




function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData();
    },[]);
    const headerStyle={
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`,
        backgroundPosition:'center',
        objectFit:'contain',
        maxWidth: '100%',
        height:'auto',
        objectFit: 'cover', 
        backgroundSize:'cover',
        marginBottom:'1%'
    }
    return (
        <header style={headerStyle}>
            <Navbar/>
            <div className="content ">
                <h1 style={{color:'white',paddingTop:'15%',paddingLeft:'5%'}}>{movie?.title||movie?.name||movie?.original_name}</h1>
                <div style={{marginTop:'7%',marginLeft:'3%',display:'flex'}}>
                    <button className="btn btn-default" ><FaPlay style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;&nbsp;Play</button>
                    <button className="btn btn-default "><FaPlus style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;&nbsp;My List</button>
                </div>
                <div style={{width:'70%' ,color:'white',paddingTop:'2%',paddingLeft:'5%',fontSize:'17px',paddingBottom:'5%'}}>
                    <p>{movie?.overview}</p>
                </div>
            </div>
            

        </header>
    )
}
export default Banner;
