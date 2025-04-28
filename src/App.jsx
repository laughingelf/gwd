import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import NoPage from './pages/NoPage'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'

function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>


    </div>
      
    </>
  )
}

export default App
