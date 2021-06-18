import { connect } from "react-redux";

import ConfigurationItem from "./configuration_card_item";

const ConfigurationItemList = ({ data }) => {
    return (
        <div className="list-group list-group-flush">
            {
                data.map((configuration, index) => (
                    <ConfigurationItem key={index} configuration={configuration}  />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationItemList)
