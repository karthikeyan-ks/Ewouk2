import './Home.css'
import video from '../assets/video/Video-24.mp4'
export const Home = () => {
    return (
        <div className='home-container'>
            <video src={video} className="video" autoPlay muted loop></video>
            <div className="gradient-overlay"></div>
            <div className='bigText'>
                <h1>
                    Ewouk   
                </h1>
            </div>
        </div>
    )
}