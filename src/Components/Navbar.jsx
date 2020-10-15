import React,{useState} from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Navbar.css'
import {auth} from '../firebase.js'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

function Navbar() {
    const [{user},dispatch] = useStateValue();
    const [dropdown,setDropdown]=useState(false);
    const logout = ()=>{
        auth.signOut();
    }
   
    return (
        <div>
        <div className="navbar">
            <div className="navbar__left Brand">
                <strong>Unsplash</strong>
            </div>
            <div className="navbar__middle search">
                <i className="material-icons">
                   search 
                </i>
                <input type="text" placeholder="Search free high-resolution photos" />
            </div>
            <div className="navbar__right">
                <ul>
                    <li>
                        <a href="#/">Explore</a>
                    </li>
                    {user &&<li>
                        <Link to="/upload"><button className="submit"><i className="material-icons">add</i></button></Link>
                    </li>}
                    <li className="blank"></li>
                    <li>
                        {user?<img src={user.photoURL} onClick={!dropdown?event=>setDropdown(true):event=>setDropdown(false)}/>:<Link to="/login">Login</Link>}
                    </li>
                    {!user &&<li><button className="join">Join</button></li>}
                </ul>
            </div>
        </div>
        <div className="bottom_nav">
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/">Following</a></li>
                <li><a href="#/">Technology</a></li>
                <li><a href="#/">Work From Home</a></li>
                <li><a href="#/">Wallpapers</a></li>
                <li><a href="#/">Travels</a></li>
                <li><a href="#/">Nature</a></li>
                <li><a href="#/">Film</a></li>
                <li><a href="#/">Textures & Patterns</a></li>
                <li><a href="#/">People</a></li>
                <li><a href="#/">View All</a></li>
            </ul>
        </div>

        {dropdown && user?<div className="dropdown">
            <button>View Profile</button>
                    <button onClick={logout}>Logout {user.displayName}</button>
        </div>:null}
       
        </div>
    )
}

export default Navbar
