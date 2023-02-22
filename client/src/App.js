import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Ideas from "./pages/Ideas"

const App = () => {
  return (
    <div className="">
      <h1>Project Hub</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
