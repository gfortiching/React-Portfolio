import MyNavbar from './Navigation/MyNavbar'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Tracker from './Pages/Tracker'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <MyNavbar />
      <div className='container'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )

}

export default App
