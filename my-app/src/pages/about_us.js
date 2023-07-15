import React from 'react';
import ahmedImage from './ahmed.jpg';
import esmaImage from './esma.jpg';
import zeinImage from './zein.jpg'
import './about_us.css'
 
const TeamMemberCard = ({ image, name, description }) => {
  return (
    <div className="team-member-card">
      <img
        src={image}
        alt={name}
        style={{ width: '150px', height: '150px' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
 
const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Our application is made on the basis of accurate data regarding information about covid-19. <br />You can see about our team below.</p>
 
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMemberCard
          image={ahmedImage}
          name="Ahmed Vucelj"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
         <TeamMemberCard
          image={esmaImage}
          name="Esma Becovic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
         <TeamMemberCard
          image={zeinImage}
          name="Zein Delic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};
 
export default AboutUs