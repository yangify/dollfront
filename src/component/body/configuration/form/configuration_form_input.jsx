import { connect } from "react-redux";

const ConfigurationFormInput = ({ index, input, updateInput, deleteInput }) => {

    return (
        <div className='row'>
            <div className='col mb-3'>
                <input className="form-control mb-2" type='text' name='title'
                       placeholder={input.title || 'Title'} onChange={updateInput('title', index)}/>
                <input className="form-control mb-2" type='text' name='searchTerm'
                       placeholder={input.query || 'Search Term'} onChange={updateInput('searchTerm', index)}/>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="literal" onChange={updateInput('patternType', index)} />
                    <label className="form-check-label" htmlFor="literal">Literal</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input me-2" type="radio" name="pattern_type" value="regexp"/>
                    <label className="form-check-label" >Regular expression</label>
                </div>

                <button onClick={() => deleteInput(index)}>Delete</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationFormInput)
