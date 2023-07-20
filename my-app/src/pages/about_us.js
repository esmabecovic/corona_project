import React from 'react';
import ahmedImage from './ahmed.jpg';
import esmaImage from './esma.jpg';
import zeinImage from './zein.jpg'
import {FaInstagram} from 'react-icons/fa6'
import {FaGithub} from 'react-icons/fa6'
import {FaLinkedinIn} from 'react-icons/fa6'
import './about_us.css'
 
const TeamMemberCard = ({ image, name, description, instagramLink, githubLink, linkedinLink }) => {
  return (
    <div className="team-member-card">
      <img
        src={image}
        alt={name}
        style={{ width: '150px', height: '150px' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className='cardIcons'>
        <a href={instagramLink}><FaInstagram className='aboutUsIcons'/></a>
        <a href={githubLink}><FaGithub className='aboutUsIcons'/></a>
        <a href={linkedinLink}><FaLinkedinIn className='aboutUsIcons'/></a>
      </div>
    </div>
  );
};
 
const AboutUs = () => {
  return (
    <div className="about-us">
      <p className='description'>Our application is made on the basis of accurate data regarding information about covid-19. <br />You can see about our team below.</p>
 
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMemberCard
          image={ahmedImage}
          name="Ahmed Vučelj"
          description="Ahmed offered solutions to our team so that everything would work in a correct way. He was most deserving when it comes to About Us Page."
          instagramLink={''}
          linkedinLink={'https://www.linkedin.com/in/ahmed-vu%C4%8Delj-b74a36254/'}
          githubLink={'https://github.com/ahmedvucelj06'}
        />
         <TeamMemberCard
          image={esmaImage}
          name="Esma Bećović"
          description="Esma is our main designer and captain of the team. In addition to doing most of the styling for our project, she had to do the communication with the whole team to get a better feel and fit."
          instagramLink={'https://www.instagram.com/esma_becovic/'}
          linkedinLink={'https://www.linkedin.com/in/esma-becovic-996a73273/'}
          githubLink={'https://github.com/esmabecovic/'}
        />
         <TeamMemberCard
          image={zeinImage}
          name="Zein Delić"
          description="Zein was the most deserving when it comes to the Country Stats Page and Covid Stats Page, where it was necessary to do a lot of functionality and all the hard work. He participated in all fields."
          instagramLink={'https://instagram.com/zeindelic?igshid=MzNlNGNkZWQ4Mg=='}
          linkedinLink={'https://www.linkedin.com/in/zein-delic-84002b274/'}
          githubLink={'https://github.com/zeindelic'}
        />
      </div>
    </div>
  );
};
 
export default AboutUs