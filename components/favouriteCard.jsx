"use client"


import {useState, useEffect} from 'react';
import Link from "next/link";










const FavouriteCard = () => {


 const [datas, setDatas ] = useState([]);


useEffect(()=>{
 const userData =JSON.parse(localStorage.getItem('userData'))
 if(userData) {
   setDatas(userData)
 }
},[])




return (
 <>
   <div className="flex flex-wrap p-8 ">
     {datas.map((data, index) => (
       <div key={index} className="border rounded-lg p-4 m-4 w-1/4 bg-cyan-600/25 ">
         <div className="card text-gray-100">
           <h2>Artist: {data.artist}</h2>
           <h2>Song: {data.song}</h2>
           <h2>URL: <a href={data.spotifyUrl} target="_blank">Click Here</a></h2>
         </div>
       </div>
     ))}
   </div>
 </>
);
};


export default FavouriteCard;