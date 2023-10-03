import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing, Services, About, Contact, Book } from 'pages'
import { RequireAuth } from 'auth'

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
        <Route
          path="/book"
          element={<RequireAuth element={<Book />}/> }
        />
      </Routes>
      </>
  )
}

export default App
