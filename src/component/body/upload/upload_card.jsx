import axios from "axios";
import {useEffect, useState} from "react";
import { connect } from "react-redux";

import { UPLOAD } from "../../../pages";
import { setPage } from "../../../redux/dispatcher/page_dispatcher";

const Upload = ({ setPage }) => {

    let [isLoading, setIsLoading] = useState(false);
    let file = null;

    function onChange(event) {
        file = event.target.files[0];
    }

    function onClick() {
        isLoading = setIsLoading(true);
        const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_UPLOAD_ENDPOINT;
        const data = new FormData();
        data.append('file', file);
        axios.post(url, data).then(() => window.location.replace('/'));
    }

    useEffect(() => { setPage(UPLOAD) }, [setPage])

    return (
        <div className="card">
            <div className="card-header text-center">
                Upload
            </div>
            <div className="card-body text-center overflow-auto">
                { isLoading ? <div className="spinner-border" role="status" /> :
                    <input type="file" className="form-control-file" onChange={onChange} required/>
                }
            </div>
            <div className="card-footer text-center">
                <input type="submit" className="btn btn-primary" onClick={onClick}/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { setPage }

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
