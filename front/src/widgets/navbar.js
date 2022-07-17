import { FaBars, FaTimes} from 'react-icons/fa';
export default function NavBar() {
return(
    <header>
        <h3><a href="#">Logo</a></h3>
        <nav>
        <a href="#">Contact Us</a>
            <a href="#">Login</a>
            <button>
                <FaTimes/>
            </button>
        </nav>
        <button>
            <FaBars/>
        </button>
    </header>
);

}