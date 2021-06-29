import { connect } from "react-redux";

const ConfigurationFormInput = ({ index, input, updateInput, deleteInput }) => {

    return (
            <form className='list-group-item py-4'>
                <input className="form-control mb-2" type='text' name='title'
                       placeholder={input.title || 'Title'} onChange={updateInput('title', index)} required/>
                <input className="form-control mb-2" type='text' name='searchTerm'
                       placeholder={input.query || 'Search Term'} onChange={updateInput('searchTerm', index)} required/>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="literal"
                           value="literal" onChange={updateInput('patternType', index)} checked/>
                    <label className="form-check-label">Literal</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="regexp"
                           value="regexp" onChange={updateInput('patternType', index)}/>
                    <label className="form-check-label">Regular expression</label>
                </div>

                <button type="submit" onClick={() => deleteInput(index)}>Delete</button>
            </form>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationFormInput)
