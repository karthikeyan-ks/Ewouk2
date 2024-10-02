import './App.css';
import { Loading } from './component/Loading';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';

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
          <Navbar />  // Navbar appears after Loading is hidden
        )
      }
    </div>
  );
}

export default App;
