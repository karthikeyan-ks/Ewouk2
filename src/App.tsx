import './App.css';
import { Loading } from './component/Loading';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {About} from './pages/About';
function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Removes the Loading component after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div className='App'>
      {
        isVisible ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About />}/>
              <Route path='/sponsers' element={<div>sponsers</div>}/>
              <Route path='/team' element={<div>team</div>}/>
              <Route path='/project' element={<div>project</div>}/>
            </Routes>
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
