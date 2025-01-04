import React from 'react'
import "./Sidebar.css"
import Home from "./Assets/icons8-home-50.png"
import news from "./Assets/icons8-news-50.png"
import music from "./Assets/icons8-musical-note-24.png"
import movie from "./Assets/icons8-3d-movie-64.png"
import sport from "./Assets/icons8-trophy-32.png"
import automobile from "./Assets/icons8-automobile-50.png"
import blogs from "./Assets/icons8-blogs-50.png"
import game from "./Assets/icons8-game-50.png"
import profile from "./Assets/profile_icon.jpeg"

function Sidebar({sidebar}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className='side-link'>
                <img src={Home} alt=""/>
                <p>Home</p>
            </div>
            <div className='side-link'>
                <img src={game} alt=""/>
                <p>Game</p>
            </div>
            <div className='side-link'>
                <img src={automobile} alt=""/>
                <p>Automobile</p>
            </div>
            <div className='side-link'>
                <img src={sport} alt=""/>
                <p>Sports</p>
            </div>
            <div className='side-link'>
                <img src={movie} alt=""/>
                <p>Entertainment</p>
            </div>
            <div className='side-link'>
                <img src={music} alt=""/>
                <p>Music</p>
            </div>
            <div className='side-link'>
                <img src={blogs} alt=""/>
                <p>Blogs</p>
            </div>
            <div className='side-link'>
                <img src={news} alt=""/>
                <p>News</p>
            </div>
            <hr/>
        </div>

        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={profile} alt=""/><p>AD Kumar</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar