"use client"


import FavouriteCard from '@components/favouriteCard';
import Link from 'next/link';
import {useState, useEffect} from 'react';






const Home = () => {


 const [songs, setSongs] = useState([]);


 useEffect(()=>{
   const userData = JSON.parse(localStorage.getItem('userData'));
   if (userData) {
   setSongs(userData);
 }
 },[])


 




 return (
   <>
   <div className="flex justify-center items-center">
   <div className="p-5">
   <h1 className="font-inter font-bold orange_gradient text-7xl text-center p-5">SongPal</h1>
   <h2 className="font-inter text-3xl text-center font-normal text-custom-bone p-5 ">The best way to connect and track your favourite music.</h2>
 


   </div>
  </div>
  <div className="flex justify-center items-center">
  < Link
   href="/create"
   >
   <button className=" hover:scale-105 items-center rounded-lg p-3  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-custom-bone flex-auto">Track New Song</button>
   </Link>
   </div>


   <div className="flex flex-col justify-center text-center mt-10 ">
   <h1 className="font-inter font-bold orange_gradient text-4xl text-center p-5">Your Top Picks 🎧</h1>
   <div className="card text-gray-100">


   </div>
   </div>
         {/* Render songs
         {songs.map((song, index) => (
           <div key={index}>
             <h2>{song.artist}</h2>
             <h3>{song.song}</h3>
             <p>{song.spotifyUrl}</p>
           </div>
         ))} */}


         <FavouriteCard/>
   </>
 )
}


export default Home
