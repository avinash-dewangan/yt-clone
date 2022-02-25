import React, { useState } from 'react'
import Header from "./componetns/header/Header.js"
import CategoriesBar from "./componetns/categoriesBar/CategoriesBar.js"
import Sidebar from "./componetns/sidebar/Sidebar.js"
import Video from "./componetns/video/Video.js"
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/homeScreen/HomeScreen.js"
import "./_app.scss"
function App() {

  const[sidebar, toggleSidbar]= useState(false);

  const handletoggleSidebar=()=>toggleSidbar(value=>!value)

  return (
    <>
      <Header handletoggleSidebar={handletoggleSidebar}/>
      <div className='app_container border border-info'>
        <Sidebar sidebar={sidebar}/>
        <Container fluid className='app_main border border-warning'>
          <HomeScreen/>
        </Container>  
      </div>
    </>
  )
}

export default App