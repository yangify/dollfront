import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";

import { CONFIGURATION } from "../../../../pages";
import ConfigurationFormInput from "./configuration_form_input";

const ConfigurationForm = () => {

    const baseState = {groupName: undefined, inputs: [{title: undefined, searchTerm: undefined, patternType: 'literal'}]}
    const [groupName, setGroupName] = useState(baseState.groupName);
    const [inputs, setInputs] = useState(baseState.inputs)

    const updateGroupName = e => { setGroupName(e.target.value) }

    const addInput = () => {
        setInputs(prevState => [...prevState, baseState.inputs]);
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
        const data = {'groupName': groupName, 'data': inputs}
        axios.post(url, data).then(() => window.location.replace(CONFIGURATION.link))
    }

    return (
        <div className='card mb-4 collapse' id='configurationForm'>
            <button onClick={addInput}>Add input</button>
            <div className='card-body'>
                <input className="form-control" type='text' name='group-name'
                       placeholder='Group name' onChange={updateGroupName}/>
                <div className="list-group-flush">
                    {
                        inputs.map((input, index) => (
                            <ConfigurationFormInput key={index} input={input} index={index}
                                                    updateInput={updateInput} deleteInput={deleteInput} />
                        ))
                    }
                </div>
            </div>
            <div className='card-footer'>
                <input type='submit' onClick={submitInputs}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationForm)
