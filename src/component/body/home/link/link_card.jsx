import { useEffect } from "react";
import { connect } from "react-redux";

import { LinkNav } from "./link_nav";
import { LinkContent } from "./link_content";
import { getLink } from "../../../../redux/dispatcher/link_dispatcher";

const LinkCard = ({ links, selected, getLink }) => {

    // eslint-disable-next-line
    useEffect(() => { getLink(selected.name) }, [selected])

    return (
        <div className="card h-100">
            <div className="card-header">Link</div>
            <div className="card-body overflow-auto">
                <LinkNav tools={ Object.keys(links) }/>
                <LinkContent content={ links }/>
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
