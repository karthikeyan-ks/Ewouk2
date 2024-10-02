import { useState, useEffect } from 'react';
import './Loading.css'
import loadingImage from '../static/image/pxfuel1.png'; // Adjust the path as needed
export const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer); 
                    return 100;
                }
                return prevProgress + 1; 
            });
        }, 20); // Adjust the interval for a smooth transition over 3 seconds

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, []);
    return (
        <div className='loading'>
            <div style={{ width: '60%', backgroundColor: '#e0e0df', borderRadius: '10px' }}>
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: '#76c7c0',
                        height: '10px',
                        borderRadius: '10px',
                        transition: 'width 0.3s ease-in-out',
                    }}
                >
                    <span style={{ marginLeft: '5px', color: '#fff' }}>{progress}%</span>
                    <div className="loader-container">
            <div className="loader-box">
                <img src={loadingImage} alt="Loading..." className="loader-image" />
                <div className="loader-text">Loading...</div>
                {/* Progress bar */}
              
            </div>
        </div>
                        
                   
                </div>
            </div>

        </div>
    )
}