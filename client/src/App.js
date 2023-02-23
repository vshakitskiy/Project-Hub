import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Ideas from "./pages/Ideas"
import './styles/index.css'

const App = () => {
  return (
    <div className="main">
      <h1 className="logo">
        <span className="logo-project">Project</span> Hub<span className="logo-v">v0</span>
      </h1>
      <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
