import './Navbar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    const handleDrop = () => {
        const menu = document.querySelector('.dropdown-menu');
        menu.style.display = 'block';
    }
    return (
        <div className="Navbar">
            <div className="container">
                <h1 className="logo">Blogazon</h1>
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-link dropdown" onClick={() => {handleDrop()}}>Categories
                        <ul className='dropdown-menu'>
                            <li><Link to="/funny/blogs" className="nav-link drop-link">Funny</Link></li>
                            <li><Link to="/educative/blogs" className="nav-link drop-link">Educative</Link></li>
                            <li><Link to="/social/blogs" className="nav-link drop-link">Social Media</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/addblog" className="nav-link">Add Blog</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar