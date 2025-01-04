import React from 'react'
import "./Navbar.css"
import menu_icon from "../Component/Assets/menu.png"
import logo from "../Component/Assets/Youyube_icon.png"
import search from "../Component/Assets/search.png"
import voice from "../Component/Assets/voice.png"
import notification from "../Component/Assets/icons8-notification-24.png"
import profile from "../Component/Assets/profile_icon.jpeg"
import create from "../Component/Assets/create.png"

function Navbar({setSidebar}) {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className="menu-icon" onClick={()=> setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""/>
            <img className="logo" src={logo} alt=""/>
        </div>

        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
                <input type='text' placeholder='Search'></input>
                <img src={search} alt=""/>
            </div>
            <img src={voice} alt=""/>
            
        </div>
        <div className='nav-right flex-div'>
            <img src={create} alt=""/>
            <img src={notification} alt=""/>
            <img src={profile} className="user-icon" alt=""/>
        </div>
    </nav>
    
  )
}

export default Navbar