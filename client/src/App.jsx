import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Projects from "./pages/projects"

const App = () => {
  return (
    <div className="">
      <h1>Project Hub</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
