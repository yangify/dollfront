import { connect } from "react-redux";

const LoginButton = () => {
    return (
        <button type="button" className="btn btn-outline-light me-2">Login</button>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
