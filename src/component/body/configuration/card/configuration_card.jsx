import { useState } from "react";
import { connect } from "react-redux";

import ConfigurationItemList from "./configuration_card_item_list";
import { deleteConfiguration } from "../../../../redux/dispatcher/configuration_dispatcher";

const ConfigurationCard = ({ configuration, deleteConfiguration }) => {

    const [isAdding, setAdding] = useState(false)

    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div>{configuration.groupName}</div>
                    <div onClick={() => deleteConfiguration(configuration)}>
                        <i className="bi bi-x-lg btn-outline-danger rounded-pill p-1" />
                    </div>
                </div>
            </div>

                <ConfigurationItemList data={configuration.data} />
                {
                    isAdding ?
                        <form className="card-body">
                            <input type='text' name='title' placeholder='Title'/><br/>
                            <input type='text' name='query' placeholder='query'/><br/>
                            <button type='submit'>Add</button>
                        </form> :
                        <></>
                }

            <div className="card-footer text-center">
                <button onClick={() => setAdding(!isAdding)}
                        className="btn btn-sm btn-outline-dark mr-3">
                    { isAdding ? "Cancel" : "Add" }
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { deleteConfiguration }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCard)
