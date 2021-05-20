import { useEffect } from "react";
import { connect } from "react-redux";

import { DetectionNav } from "./detection_nav";
import { DetectionContent } from "./detection_content";
import { getLink } from "../../../../redux/dispatcher/link_dispatcher";

const DetectionCard = ({ links, selected, getLink }) => {

    // eslint-disable-next-line
    useEffect(() => { getLink(selected.name) }, [selected])

    let tools = links.map(link => { return link['decompiler']})

    return (
        <div className="card h-100">
            <div className="card-header">Link</div>
            <div className="card-body overflow-auto">
                <DetectionNav tools={ tools }/>
                <DetectionContent content={ links }/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected,
});

const mapDispatchToProps = { getLink }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCard)
