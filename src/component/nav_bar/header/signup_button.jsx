import { connect } from "react-redux";

const SignupButton = () => {
    return (
        <button type="button" className="btn btn-warning">Sign-up</button>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SignupButton)
