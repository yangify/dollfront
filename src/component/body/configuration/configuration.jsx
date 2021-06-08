import { connect } from "react-redux";
import { useEffect } from "react";

import { getConfiguration } from "../../../redux/dispatcher/configuration_dispatcher";
import { ConfigurationForm } from "./configuration_form";
import ConfigurationCard from "./configuration_card";

const Configuration = ({ getConfiguration }) => {

    // eslint-disable-next-line
    useEffect(() => { getConfiguration() }, [])

    return (
        <>
            <ConfigurationForm />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <ConfigurationCard />
            </div>
        </>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { getConfiguration }

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)
