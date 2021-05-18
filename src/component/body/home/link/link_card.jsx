import { useEffect } from "react";
import { connect } from "react-redux";

import { LinkNav } from "./link_nav";
import { LinkContent } from "./link_content";
import { getLink } from "../../../../redux/dispatcher/link_dispatcher";

const LinkCard = (props) => {

    // eslint-disable-next-line
    useEffect(() => { props.getLink(props.selected.name) }, [props.selected])

    return (
        <div className="card h-100">
            <div className="card-header">Link</div>
            <div className="card-body overflow-auto">
                <LinkNav tools={ Object.keys(props.links) }/>
                <LinkContent content={ props.links }/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected,
});

const mapDispatchToProps = { getLink }

export default connect(mapStateToProps, mapDispatchToProps)(LinkCard)
