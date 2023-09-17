import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing, Services, About, Contact } from './pages'

function App (): any {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      </>
  )
}

export default App
