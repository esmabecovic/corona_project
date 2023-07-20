import React from "react";
import {FaInstagram} from 'react-icons/fa6'
import {FaFacebookF} from 'react-icons/fa6'
import {FaTwitter} from 'react-icons/fa6'
import { NavLink } from "react-router-dom";
import './footer.css'

const Footer = () =>{
return(
    <div className="mainFooter">
    <div className="icons">
    <a href="https://www.facebook.com/coronavirus_info/" className="icon">
        <FaFacebookF className="footerIcon"/>
    </a>
    <a href="https://www.instagram.com/preventcovid19/" className="icon">
        <FaInstagram className="footerIcon"/>
    </a>
    <a href="https://twitter.com/COVIDNewsByMIB?t=w_-4xmGu_W6nz4wC3_5DXw&s=08" className="icon">
    <FaTwitter className="footerIcon"/>
</a>
    </div>
    <div className="navFooter">
        <li><NavLink to={'/covid_stats'} style={{textDecoration: 'none', color: '#6E7DAB', padding: '0 10px'}}><li className="liFooter">Covid Stats</li></NavLink></li>
        <li><NavLink to={'/country_stats'} style={{textDecoration: 'none', color: '#6E7DAB', padding: '0 10px'}}><li className="liFooter">Country Stats</li></NavLink></li>
    </div>
        <h4 style={{color: '#6E7DAB'}}>© Covid 19 Coorporation</h4>
    </div>

)
}

export default Footer
