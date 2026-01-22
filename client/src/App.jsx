import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Login from './auth/Login'
import Signup from './auth/Signup'
import Admin from './pages/Admin'
import Loader from './ui/Loader'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/s" element={<Signup/>}/>
    <Route path="/l" element={<Login/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/loader" element={<Loader/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

