"use client"


import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react'


const Form = () => {


const router = useRouter();
const [artist,setArtist] = useState("");
const [song, setSong] = useState("");
const [spotifyUrl, setSpotifyUrl] = useState("");
const [userData, setUserData] = useState([]);




const updateArtist = (e) => {
 setArtist(e.target.value);


};


const updateSong = (e) => {
 setSong(e.target.value);


};


const updateSpotifyUrl = (e) => {
 setSpotifyUrl(e.target.value);


};




const submitData = (e) => {
   e.preventDefault();
   const formData = { artist: artist, song: song, spotifyUrl: spotifyUrl };


   const existingData = JSON.parse(localStorage.getItem('userData')) || [];
   const newData =[...existingData, formData];
   setUserData(newData);
   localStorage.setItem('userData', JSON.stringify(newData));
   router.push('/');


}


 
 return (
     <div className="flex flex-col justify-center items-center h-screen">
         <h1 className="mb-10 font-inter font-bold orange_gradient text-4xl text-center"> Add New Favorite</h1>
         <form
         onSubmit={submitData}
          className="flex flex-col items-center"
         >
             <div className="block mt-5 mb-5">
                 <label className="text-center mb-5 mr-5 text-custom-bone font-inter">
                     Artist Name
                 </label>
                 <input
                     type="text"
                     name="artist"
                     required
                     placeholder="Enter Artist Name"
                     className="bg-amber-500/20 p-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 text-custom-bone"
                     onChange={updateArtist}
                 />
             </div>
             <div className="block mt-5 mb-5">
                 <label className="text-center mb-5 mr-5 text-custom-bone font-inter">
                     Song Name
                 </label>
                 <input
                     type="text"
                     name="song"
                     required
                     placeholder="Enter Song Name"
                     className="bg-amber-500/20 p-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 text-custom-bone"
                     onChange={updateSong}
                 />
             </div>
             <div className="block mt-5 mb-5">
                 <label className="text-center mb-5 mr-5 text-custom-bone font-inter">
                     Spotify URL
                 </label>
                 <input
                     type="text"
                     name="spotifyUrl"
                     required
                     placeholder="Enter Spotify URL"
                     className="bg-amber-500/20 p-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 text-custom-bone"
                     onChange={updateSpotifyUrl}
                 />
             </div>
             <div className="flex justify-center">
                 <button
                     type="submit"
                     className="mt-10 px-10 hover:scale-105 items-center rounded-lg p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-custom-bone flex-auto"
                 >
                     Submit
                 </button>
             </div>
         </form>
     </div>
 )
}


export default Form;
