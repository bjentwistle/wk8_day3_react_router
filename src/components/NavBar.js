
import {Link} from 'react-router-dom'; 

const NavBar = () => {  // don't use <a> (attributes) in here 
    return (
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
            <li>
                <Link to="/pricing"> Pricing </Link>
            </li>
            <li>
                <Link to="/contacts"> Contacts </Link>
            </li>
        </ul>

    );
}

export default NavBar;