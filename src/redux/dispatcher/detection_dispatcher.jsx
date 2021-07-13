import * as DetectionAction from "../action/detection_action";

export const getDetections = filename => async dispatch => {
    const action = await DetectionAction.getDetections(filename);
    dispatch(action);
};

export const toggleLoadingState = status => dispatch => {
    const action = DetectionAction.toggleLoadingState(status);
    dispatch(action);
}

export const toggleFilterButton = index => dispatch => {
    const action = DetectionAction.toggleFilterButton(index);
    dispatch(action);
}
