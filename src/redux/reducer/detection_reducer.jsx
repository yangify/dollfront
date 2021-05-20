import * as type from "../action/types";

export const DetectionReducer = (state= [], action) => {
    switch (action.type) {
        case type.GET_LINK:
            return action.payload;
        default:
            return state;
    }
};
