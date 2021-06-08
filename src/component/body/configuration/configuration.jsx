import { useEffect } from "react";
import { connect } from "react-redux";

import ConfigurationCard from "./configuration_card";
import { CONFIGURATION } from "../../../pages";
import { setPage } from "../../../redux/dispatcher/page_dispatcher";
import { getConfiguration } from "../../../redux/dispatcher/configuration_dispatcher";
import { ConfigurationForm } from "./configuration_form";

const Configuration = ({ setPage, getConfiguration }) => {

    useEffect(() => {
        setPage(CONFIGURATION);
        getConfiguration()
    }, [setPage, getConfiguration])

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

const mapDispatchToProps = {
    setPage,
    getConfiguration
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)
