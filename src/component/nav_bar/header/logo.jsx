import { connect } from "react-redux";

const Logo = () => {
    return (
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <i className="bi bi-bootstrap-fill" style={{ fontSize: "2em" }} />
        </a>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
