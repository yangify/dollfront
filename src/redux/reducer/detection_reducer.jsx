import * as type from "../action/types";

const initialState = {
    _id: '',
    data: [],
    filename: 'no file',
    isLoading: true
};

export const DetectionReducer = (state=initialState, action) => {
    switch (action.type) {

        case type.SET_DETECTION_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case type.GET_DETECTION:
            return {
                ...state,
                data: action.payload.data,
                filename: action.payload.filename,
                _id: action.payload.id
            };

        default:
            return state;
    }
};
