import './Navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark mb-4">
            <div className="container">
                <Link to="/" className="fs-3 fw-bolder ubuntu navbar-brand">
                    Rick & Morty <span className="text-primary">Wiki</span> 
                </Link>
            </div>
        </nav>
    )
}

export default Navbar