import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Landing, Services, About, Contact } from './pages'

function App (): any {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

export default App
