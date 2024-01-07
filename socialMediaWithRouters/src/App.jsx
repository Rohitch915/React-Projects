import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Body from './components/Body'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import { useContext, useState } from 'react'
import { SocialMedia, SocialMediaProvider } from './store/SocialMedia'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <SocialMediaProvider >
        <SideBar ></SideBar>
        <div className="main">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </SocialMediaProvider>

    </>
  )
}

export default App
