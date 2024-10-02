import './Home.css'
import video from '../assets/video/Video-24.mp4'
import logo from '../static/image/image.png';

export const Home = () => {
    return (
        <div className='home-container'>
            <video src={video} className="video" autoPlay muted loop></video>
            <div className="gradient-overlay"></div>

            <div className="ewouk-container">
                <div className='brand-logo'> 
                    <img src={logo} alt="E-WOUK logo" />
                </div>
                <h1 className="ewouk-text">E-WOUK</h1>
            </div>
        </div>
    )
}
