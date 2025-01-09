// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from "./pages/DefaultLayout"
import AddPostPage from "./pages/AddPostPage"
import PostPage from "./pages/PostPage"
import HomePage from "./pages/HomePage"
import Main from "./pages/MainComponent"
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage} />
          <Route path='/contact' Component={Contact} />
          <Route path='/about' Component={About} />
          <Route path='/posts'>
            <Route index Component={Main}></Route>
            <Route path=':id' Component={PostPage}></Route>
            <Route path='create' Component={AddPostPage}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </>
  )
}

export default App
