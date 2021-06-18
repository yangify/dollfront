import { connect } from "react-redux";

const ConfigurationFormInput = ({ index, input, updateInput, deleteInput }) => {

    return (
        <div className='row'>
            <div className='col'>
                <input className="form-control mb-2" type='text' name='title'
                       placeholder={input.title || 'Title'} onChange={updateInput('title', index)}/>
                <input className="form-control mb-2" type='text' name='search_term'
                       placeholder={input.query || 'Search Term'} onChange={updateInput('search_term', index)}/>
                <input className="form-control mb-2" type='text' name='is_regex'
                       placeholder={input.query || 'Pattern type'} onChange={updateInput('pattern_type', index)}/>
                <button onClick={() => deleteInput(index)}>Delete</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationFormInput)
