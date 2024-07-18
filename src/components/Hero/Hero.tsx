
import './Hero.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

import heroImage from '../../assets/image.png';
const Hero = () => {
  return (
    <>
    <div className="container">
        <div className="image">
        <img src={heroImage} alt="Description" />
      </div>
      <div className="text sm:text-left text-center">
        <h1 className="text-4xl">JOSHUA KANATT</h1>
        <p className='jost-400'>
        Founder & Chief Executive Officer - GAMERS TAG<br></br></p>
        <p className='jost-400'>
        Senior Product Architect & Business Analyst | Deakin GMBA | Stanford SSP Entrepreneur | Graduated from IIITB, IMTG, LJMU, HICET, Karunya | Product Growth & Marketing Strategist | Data & Risk Analyst<br></br>
        </p>
       
        <p className='poppins-extralight mt-2'>
        I'm a visionary entrepreneur with over four years of expertise in Product management, architecture, Marketing, Data analytics, Business development & Consulting, and Startups. Designed over 100 world-class products, setting new industry standards. With unique talent for forecasting product growth, validated by extensive customer persona analysis. As an entrepreneur by heart, I bring a competitive mindset to product ownership,
assuring highest performance and innovation with mindset of 5x growth. Have a vision to forecast the product. My expertise of numerous business models in multiple industries, refined by my experience.
        </p>
        
        <br></br>
    <p className='md:text-2xl text-xl poppins-extralight'>"The journey of a thousand miles begins with a single innovative step." <br></br>- Joshua Kanatt</p>
 
    <div className="social-media-buttons">
    <a href="https://www.linkedin.com" target="google.com" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a href="mailto:your-email@example.com">
      <FaEnvelope />
    </a>
  </div>
      </div>
    </div>
  </>
  );
};

export default Hero;