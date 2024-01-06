import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Body from './components/Body'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import { useContext, useState } from 'react'
import { SocialMedia, SocialMediaProvider } from './store/SocialMedia'

function App() {

  let [curState, setState] = useState("home")

  const changeState = (state) => {
    if (state === "home") {
      setState("home");
    } else {
      setState("createPost");
    }
  }

  return (
    <>
      <SocialMediaProvider changeState={changeState}>
        <SideBar ></SideBar>
        <div className="main">
          <Header></Header>
          {curState === "home" ? <Body></Body> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </SocialMediaProvider>

    </>
  )
}

export default App
