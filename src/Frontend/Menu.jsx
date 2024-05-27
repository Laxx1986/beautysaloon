import { Link } from 'react-router-dom';

function Menu({ login, userRights  }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-center">
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricelist">Price List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            {(userRights === 1 || userRights === 2) && (
                                <li><Link className="nav-link" to="/admin">Admin</Link></li>
                            )}
                        </li>
                        <li className="nav-item">
                            {(userRights === 3) && (
                                <li><Link className="nav-link" to="/bookingspage">Bookings</Link></li>
                            )}
                        </li>
                        <li className="nav-item">
                            {!login && <li><Link className="nav-link" to="/registration">Register</Link></li>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
