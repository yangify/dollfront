import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import * as Pages from "../../../pages";

const Menu = () => {

    const home = "nav-link px-2 text-secondary";
    const link = "nav-link px-2 text-white";

    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-auto">
            { Pages.PAGE_LIST.map( page => (
                <li key={page.name} >
                    <Link to={page.link} className={ page.name === Pages.HOME.name ? home : link }>
                        {page.display}
                    </Link>
                </li>
            ))}
            <li><a href={process.env.REACT_APP_SOURCE_GRAPH_URL} className="nav-link px-2 text-white">SourceGraph</a></li>
        </ul>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
