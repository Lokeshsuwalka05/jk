
import './Hero.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

import heroImage from '../../assets/image.webp';
const Hero = () => {
  return (
    <>
    <div className="md:flex m-4">
        <div className=" md:max-w-[600px] md:max-h-[900px] mt-5">
        <img src={heroImage} alt="Description" />
      </div>
      <div className="ml-4 mr-4 md:mt-16 text sm:text-left text-center md:max-w-[755px] md:max-h-[658]">
        <h1 className="md:text-5xl text-4xl gradient-h1 poppins-regular ">Joshua Kanatt</h1>
        <p className='jost-200 text-xl leading-10 text-neutral-400 tracking-[3px]'>
        Founder & Chief Executive Officer - GAMERS TAG</p>     
        <p className='poppins-extralight mt-2 gradient-text md:tracking-widest'>
        I'm a visionary entrepreneur with over four years of expertise in Product management, architecture, Marketing, Data analytics, Business development & Consulting, and Startups. Designed over 100 world-class products, setting new industry standards. With unique talent for forecasting product growth, validated by extensive customer persona analysis. As an entrepreneur by heart, I bring a competitive mindset to product ownership,
assuring highest performance and innovation with mindset of 5x growth. Have a vision to forecast the product. My expertise of numerous business models in multiple industries, refined by my experience.
        </p>
        
        <br></br>
    <p className='md:text-2xl text-lg poppins-extralight  bg-clip-text tracking-[3px]'>"The journey of a thousand miles begins <br></br>with a single innovative step."</p>
    <p className='md:mr-20 md:text-right text-center text-xl poppins-extralight'>- Joshua Kanatt</p>
 
    <div className="social-media-buttons md:mt-10">
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