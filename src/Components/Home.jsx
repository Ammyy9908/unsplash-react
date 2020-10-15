import React,{useEffect,useState} from 'react'
import HomeHeader from './HomeHeader'
import Navbar from './Navbar'
import '../styles/Home.css'
import {db} from '../firebase'
import {motion} from 'framer-motion'

function Home() {
    const [photos,setPhotos]= useState(null)

    useEffect(()=>{
        db.collection("photos").onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                let temp = []
                temp.push(doc.data())
                setPhotos(temp);
                console.log(temp[0]['photos'][0].url)
                
                
            })
        })
        
    },[])

    
    
    return (
        <div className="home">
           <Navbar/>
           <HomeHeader/> 
           <div className="gallery">
               {photos && photos[0]['photos'].map((photo)=>{
                   return photo.url.length==0?null:<motion.img src={photo.url} layout/>
               })}
               
           </div>
        </div>
    )
}

export default Home
