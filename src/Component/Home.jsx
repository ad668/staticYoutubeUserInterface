import React from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import "./Home.css"

function Home({sidebar}) {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar? "" :"large-container"}`}>
          <Videos/>
        </div>
    </>
  )
}

export default Home