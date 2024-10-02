import './App.css';
import { Loading } from './component/Loading';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {About} from './pages/About';
import { Sponsers } from './pages/Sponsers';
import { Team } from './pages/Team';
import Scene from './pages/Project';
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
              <Route path='/sponsers' element={<Sponsers />}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/project' element={<Scene/>}/>
            </Routes>
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
