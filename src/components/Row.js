import React from 'react';
import {useState,useEffect} from 'react';
import axios from "../axios";
import '../App.css';
const base_url="https://image.tmdb.org/t/p/original/"
function Row(props) {
    const [movies,SetMovies]=useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            SetMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl]);
    console.log(movies);
    const imgStyle=()=>{
        if (props.isLarge){
            return {
                width:'100%',
                maxHeight:'260px',
                objectFit:'contain',
                marginRight:'3px',
                marginLeft:'3px'
            }
        }
        else {
            return {
                width:'100%',
                maxHeight:'200px',
                objectFit:'contain',
                marginRight:'3px',
                marginLeft:'3px'
            }
        }
    }
    const styleContainer={
        display:'flex',

    }
    
    return (
        <div className="row" >
            <h6 style={{color: 'white'}}>{props.title}</h6>
            <div className="row_posters" style={styleContainer}>
                {movies.map((movie)=>
                    (<img
                        key={movie.id}
                        className="oneMovie"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                        style={imgStyle()}
                        ></img>))}

            </div>
        </div>
    )
}
export default Row ;