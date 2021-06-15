import { connect } from "react-redux";

import ConfigurationItemList from "./configuration_card_item_list";
import { deleteConfiguration } from "../../../../redux/dispatcher/configuration_dispatcher";

const ConfigurationCard = ({ configuration, deleteConfiguration }) => {
    return (
        <div className="card">
            <div className="card-header">{configuration.groupName}</div>
            <div className="card-body">
                <ConfigurationItemList data={configuration.data} />
            </div>
            <div className="card-footer text-center">
                <button onClick={() => deleteConfiguration(configuration)}
                        className="btn btn-sm btn-danger" >Delete</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { deleteConfiguration }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCard)
