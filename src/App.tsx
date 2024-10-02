import './App.css'
import { Loading } from './component/Loading'
import { useState, useEffect } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Removes the element after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div className='App'>
      {
        isVisible && (
          <Loading/>
        )
      }
    </div>
  )
}

export default App
