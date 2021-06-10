import axios from "axios";
import { useState } from "react";

import { CONFIGURATION } from "../../../pages";

export const ConfigurationForm = () => {

    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');

    const changeTitle = e => { setTitle(e.target.value) };
    const changeQuery = e => { setQuery(e.target.value) };
    const onClick = () => {
        const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_CONFIGURATION_ENDPOINT;
        const data = new FormData();
        data.append('title', title);
        data.append('query', query);
        axios.post(url, data).then(() => window.location.replace(CONFIGURATION.link))
    }

    return (
        <div className='card mb-4 collapse' id='configurationForm'>
            <div className='card-body'>
                <input type='text' name='title' onChange={changeTitle} /><br/>
                <textarea name='query' onChange={changeQuery} /><br/>
                <input type='submit' onClick={onClick}/>
            </div>
        </div>
    );
};
