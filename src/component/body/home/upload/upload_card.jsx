import { useState } from "react";
import axios from "axios";

export const Upload = () => {

    let [isLoading, setIsLoading] = useState(false);
    let file = null;

    function onChange(event) {
        file = event.target.files[0];
    }

    function onClick() {
        isLoading = setIsLoading(true);
        const data = new FormData()
        data.append('file', file);
        axios
            .post("http://localhost:5000/api/upload", data)
            .then(() => window.location.replace('/'));
    }

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
