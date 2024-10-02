import './Team.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import dpImage from '../assets/images/WhatsApp Image 2024-09-28 at 7.21.43 PM (2).jpeg'; 

export const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,               // Enables automatic sliding
        autoplaySpeed: 3000,          // Slide change every 3 seconds
        pauseOnHover: true,          // (Optional) Slides won't pause when hovered
    };

    const images = [image1, image2, image3];
    const executivePanel = [
        { name: 'Shanu Jaimon Cherian', photo: dpImage, position: 'Captain' },
        { name: 'Ashwin Girish', photo: dpImage, position: 'Team Manager' },
        { name: 'Sidharth M Salim', photo: dpImage, position: 'Mechanical Head' },
        { name: 'Abel Lalu Thomas', photo: dpImage, position: 'Electrical Head' },
        { name: 'Divina Ann Benoy', photo: dpImage, position: 'Fabrication Head' },
        { name: 'Jayadev S Nair', photo: dpImage, position: 'Driver' },
        { name: 'Mohammad Farhan Thangal', photo: dpImage, position: 'Treasurer' },
    ];
    
    const teamMembers = [
        { name: 'Team Member 1', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
        { name: 'Team Member 2', photo: dpImage, position: 'Member' },
       
    ];

    return (
        <div className='team-container'>
            <h1>Our Team</h1>
            <div className='slide-container'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="team-container">
             
            <h1 className='ex'>Executive Panel</h1>
            <div className="team-row executive-row">
                {executivePanel.map((member, index) => (
                    <div key={index} className="team-member executive-member">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <p>{member.name}</p>
                        <div className="position">{member.position}</div>
                    </div>
                ))}
            </div>

            <h1 className='team'>Team Members</h1>
            <div className="team-row member-row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member1">
                        <img src={member.photo} alt={member.name} className="team-photo small-photo" />
                        <p>{member.name}</p>
                        <div className="position1">{member.position}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};
