import { FaBars, FaTimes} from 'react-icons/fa';
import LogoWhite from '../imgs/LogoWhite.png';
export default function NavBar() {
    
return(
   <>
   <Nav>
    <NavLink to ='/'>
        Logo
    </NavLink>
    <Bars>
    </Bars>
    <NavMenu>
        <NavLink to='/contactus' activeStyle>Contactez-Nous</NavLink>
        <NavLink to ='/login' activeStyle>Se Connecter</NavLink>
        <NavLink to = '/register' activeStyle>S'iscrire</NavLink>
    </NavMenu>
   </Nav>
   </>
);

}