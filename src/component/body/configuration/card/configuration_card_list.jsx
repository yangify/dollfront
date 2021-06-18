import { connect } from "react-redux";

import ConfigurationCard from "./configuration_card";

const ConfigurationCardList = ({ configurations }) => {
    return (
        <>
            {
                configurations.map(configuration => (
                    <div key={configuration._id} className="col">
                        <ConfigurationCard configuration={configuration} />
                    </div>
                ))
            }
        </>

    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCardList)
