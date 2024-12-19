import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoMdCall,IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
function Footer() {
  return (
    <footer className='footer'>

      <div className='section-one'>

        <div className='footer-contact'>
          <h3 className='contact-h'>Contact Us</h3>
          <div className='contact-p'>
          <MdLocationOn/>
          <p>Location</p>
          </div>
          <div className='contact-p'>
          <IoMdCall />
          <p>Call +01 1234567890</p>
          </div>
          <div className='contact-p'>
          <IoMdMail />
          <p>demo@gmail.com</p>
          </div>
        </div>

        <div className='footer-intro'>
          <h1 className='intro-h'>Feane</h1>
          <p className='intro-p'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
          <div className='intro-icons'>
            <FaFacebookF color='#222831' size={18} className='icon-one'/>
            <FaTwitter color='#222831' size={18} className='icon-two' />
            <FaLinkedinIn color='#222831' size={18} className='icon-three' />
            <IoLogoInstagram color='#222831' size={18} className='icon-four' />
            <FaPinterest color='#222831' size={18} className='icon-five' />
          </div>
        </div>

        <div className='footer-timing'>
          <h3 className='time-h'>Opening Hours</h3>
          <p className='time-p'>Everyday</p>
          <p className='time-p'>10.00 Am -10.00 Pm</p>
        </div>

      </div>

      <div>
      <p>© 2024 All Rights Reserved by Izma</p>
      </div>
    </footer>
  )
}

export default Footer;
