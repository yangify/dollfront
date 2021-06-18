import { connect } from "react-redux";

import DetectionItem from "./detection_item";

const DetectionList = ({ detectionList, active }) => {

    const tabPane = "tab-pane fade";
    const tabPaneActive = "tab-pane fade show active";

    return (
        <div id={detectionList.title} className={ active ? tabPaneActive : tabPane }>
            <ul className="list-group list-group-flush">
                {
                    detectionList.data.map((detection, index) => (
                            <DetectionItem key={index} link={detection.link} path={detection.file.path} />
                        )
                    )
                }
            </ul>
        </div>

    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionList)
