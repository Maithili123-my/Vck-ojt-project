import { link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="main-header">
                <nav>
                    <span className='college-name'><Link to="/">Vivekanand College</Link></span>
                    <meta charSet='UTF-8'/>
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/About">About</Link>
                    <Link className="nav-item" to="/Courses">COURSES</Link>
                    <Link className="nav-item" to="/contact">Contact</Link>
                    <Link className="nav-item" to="/Admission">Admission<button className='btn btn-outline-success' type="button"/>Apply Now!</Link>
                </nav>
            </header>
        </div>

    )

}
export default Header;



