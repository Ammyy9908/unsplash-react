import React from 'react'
import '../styles/HomeHeader.css'

function HomeHeader() {
    return (
        <div className="home-header">
            <div className="center">
                <h1>Unsplash</h1>
                <p>The internet’s source of freely-usable images.
                Powered by creators everywhere.</p>
                <br/>
                <div className="search">
                    <i className="material-icons">search</i>
                    <input type="text" placeholder="Search free high-resolution photos"/>
                </div>
            </div>

        </div>
    )
}

export default HomeHeader
