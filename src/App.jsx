// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import KeyPress from './Pages/Components/KeyPress'
import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Pages/Components/Navbar'
import Footer from './Pages/Components/Footer'
import { Divider } from '@chakra-ui/react'
import PrivacyPolicy from './Pages/Components/PrivacyPolicy'
import AboutUs from './Pages/Components/AboutUs'
import TermsOfService from './Pages/Components/TermsOfService'

function App() {
  return (
    <div className='bg-slate-950 min-h-screen'>
      <Router>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/typingtest' element={<KeyPress />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/termsofservice' element={<TermsOfService />} />
          </Routes>
        </div>
        <div className='flex justify-center mt-16'>
          <Divider width={'95%'} />
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
