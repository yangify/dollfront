import axios from "axios";
import { useState } from "react";

import { CONFIGURATION } from "../../../pages";

export const ConfigurationForm = () => {

    const [groupName, setGroupName] = useState(undefined);
    const [inputs, setInputs] = useState([{title: undefined, query: undefined}])

    const updateGroupName = e => { setGroupName(e.target.value) }

    const addInput = () => {
        setInputs(prevState => [...prevState, {title: undefined, query: undefined}]);
    }

    const updateInput = (variable, index) => async e => {
        const newInputs = [...inputs];
        newInputs[index][variable] = e.target.value;
        setInputs(newInputs);
    };

    const deleteInput = (index) => {
        const newInputs = inputs.filter((input, i) => i !== index);
        setInputs(newInputs);
    }

    const submitInputs = () => {
        const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_CONFIGURATION_ENDPOINT;
        const data = {'group-name': groupName, 'data': inputs}
        axios.post(url, data).then(() => window.location.replace(CONFIGURATION.link))
    }

    return (
        <div className='card mb-4 collapse' id='configurationForm'>
            <button onClick={addInput}>Add input</button>
            <div className='card-body'>
                <input type='text' name='group-name' placeholder='Group name' onChange={updateGroupName}/>
                {
                    inputs.map((input, index) => (
                        <div key={index} className='row mt-3'>
                            <div className='col'>
                                <input type='text' name='title' placeholder={input.title || 'Title'}
                                       onChange={updateInput('title', index)} />
                                <input type='text' name='query' placeholder={input.query || 'Query'}
                                       onChange={updateInput('query', index)} />
                                <button onClick={() => deleteInput(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='card-footer'>
                <input type='submit' onClick={submitInputs}/>
            </div>
        </div>
    );
};
