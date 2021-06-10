import * as DetectionAction from "../action/detection_action";

export const getDetections = filename => async dispatch => {
    const action = await DetectionAction.getDetections(filename);
    dispatch(action);
};
