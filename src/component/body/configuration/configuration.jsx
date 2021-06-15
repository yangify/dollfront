import { useEffect } from "react";
import { connect } from "react-redux";

import ConfigurationCardList from "./card/configuration_card_list";
import ConfigurationForm from "./form/configuration_form";
import { CONFIGURATION } from "../../../pages";
import { setPage } from "../../../redux/dispatcher/page_dispatcher";
import { getConfiguration } from "../../../redux/dispatcher/configuration_dispatcher";

const Configuration = ({ configurations, setPage, getConfiguration }) => {

    useEffect(() => {
        setPage(CONFIGURATION);
        getConfiguration()
    }, [setPage, getConfiguration])

    return (
        <>
            <ConfigurationForm />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    configurations.length === 0 ?
                        <p>no configurations</p> :
                        <ConfigurationCardList configurations={configurations}/>
                }
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    ...state,
    configurations: state.configurations
});

const mapDispatchToProps = {
    setPage,
    getConfiguration
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)
