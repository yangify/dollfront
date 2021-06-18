import { connect } from "react-redux";

import DetectionGroupTab from "./detection_group_tab";

const DetectionGroupTabs = ({ group }) => {
    return (
        <ul className="nav nav-pills nav-fill pt-4 px-4" role="tablist">
            {
                group.map((query, index) => (
                    <DetectionGroupTab key={index} query={query} active={index === 0} />
                ))
            }
        </ul>
    );
}

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionGroupTabs)
