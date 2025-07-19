import React from 'react'
import { useEffect, useState } from 'react'

const Movie_list = () => {

    const [movie,setmovie]= React.useState([]);
    const [loading,setloading]= React.useState(false);
    // this section is for the api data fetching
        const API_BASE_URL="https://api.themoviedb.org/3";
        const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
    
        const API_OPTIONS={
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        }
    
        const [errormsg,seterrormsg]= React.useState("");
    
        const fetchMovies = async () => {
    
            try{
    
                const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
                const response = await fetch(endpoint, API_OPTIONS);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
    
                if(data.response==='False'){
                    seterrormsg(data.Error);
                    setmovie([]);
                    return;
                }
                setmovie(data.results);
                setloading(true);
    
    
    
    
            }catch(error){
                seterrormsg("Something went wrong, please try again later.");}
    
                finally{
                    setloading(false);
                }
        }
    
    
        useEffect(()=>{
            fetchMovies();
    
        },[]);




  return (
    <div>

    </div>
  )
}

export default Movie_list