import * as type from "../action/types";

const initialState = {'data': []};

export const DetectionReducer = (state=initialState, action) => {
    switch (action.type) {
        case type.GET_DETECTION:
            return action.payload;
        default:
            return state;
    }
};
