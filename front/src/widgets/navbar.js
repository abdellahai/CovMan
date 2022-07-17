import { FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import LogoWhite from '../imgs/LogoWhite.png';
import  '../styles/nav.css'
export default function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
return(
    <header>
        <nav ref={navRef} className='nav'>
            <a href='/' className='SiteTitle'> <img src = {LogoWhite} alt ='Logo' className='nav-logo'></img>CovMan</a>
          
                <a href="/">Contact Us</a>
                
                <a href="/">Login</a>
        
            <button className = 'nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button  className= 'nav-btn nav-show-btn' onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
);

}