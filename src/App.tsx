import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import NavBar from './components/NavBar';
import Japan from './pages/Country/Japan';
import Canada from './pages/Country/Canada';
import Usa from './pages/Country/Usa';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />

      <div className='mt-50 ml-50'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/countries' element={<Countries />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/japan' element={<Japan />}></Route>
          <Route path='/usa' element={<Usa />}></Route>
          <Route path='/canada' element={<Canada />}></Route>
        </Routes>
      </div>
      
      

    </BrowserRouter>
  )
}

export default App
