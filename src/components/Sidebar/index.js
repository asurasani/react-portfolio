import React from 'react'
import {NavLink } from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHome, faEnvelope, faUser, faCode} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/aneesh-surasani-36346422a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn9nou3wCRw%2BDP2w9fQkuCg%3D%3D">
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://github.com/asurasani">
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.instagram.com/aneeshsurasani/">
                    <FontAwesomeIcon icon={faInstagram} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar