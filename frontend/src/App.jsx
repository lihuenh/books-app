import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AddBook from './components/pages/AddBook'
import EditBook from './components/pages/EditBook'
import BookDetails from './components/pages/BookDetails'
import HostInfo from './components/pages/HostInfo'

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <Router>
      {/* Contenedor principal con flex y min-h-screen */}
      <div className={`flex flex-col min-h-screen`}>
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        {/* Contenido principal con flex-grow */}
        <div className='flex-grow lg:px-6 pt-24 px-4 pb-20 lg:w-[52rem] lg:mx-auto'>
          <Routes>
            <Route path='/' element={<Home darkMode={darkMode} />} />
            <Route path='/add' element={<AddBook darkMode={darkMode} />} />
            <Route
              path='/edit-book/:id'
              element={<EditBook darkMode={darkMode} />}
            />
            <Route
              path='/book/:id'
              element={<BookDetails darkMode={darkMode} />}
            />
            <Route
              path='/hostinfo'
              element={<HostInfo darkMode={darkMode} />}
            />
          </Routes>
        </div>

        {/* Footer sticky */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  )
}

export default App
