import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link to="/upload" className="nav-link px-2 text-white">Upload</Link></li>
            <li><a href={process.env.REACT_APP_SOURCE_GRAPH_URL} className="nav-link px-2 text-white">Explore</a></li>
            <li><Link to="/configure" className="nav-link px-2 text-white">Configure</Link></li>
        </ul>
    );
}
