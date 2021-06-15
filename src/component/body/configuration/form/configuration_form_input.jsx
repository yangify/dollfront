import { connect } from "react-redux";

const ConfigurationFormInput = ({ index, input, updateInput, deleteInput }) => {
    return (
        <div className='row mt-3'>
            <div className='col'>
                <input type='text' name='title' placeholder={input.title || 'Title'} onChange={updateInput('title', index)} />
                <input type='text' name='query' placeholder={input.query || 'Query'} onChange={updateInput('query', index)} />
                <button onClick={() => deleteInput(index)}>Delete</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationFormInput)
