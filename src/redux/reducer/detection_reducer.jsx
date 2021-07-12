import * as type from "../action/types";

const initialState = {
    _id: '',
    data: [],
    filename: 'no file',
    isLoading: true,
    showFilter: []
};

export const DetectionReducer = (state=initialState, action) => {
    switch (action.type) {

        case type.TOGGLE_FILTER:
            const index = action.payload;
            state.showFilter[index] = !state.showFilter[index]
            return {
                ...state,
                showFilter: state.showFilter
            }

        case type.SET_DETECTION_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case type.GET_DETECTION:
            const data = action.payload.data;
            return {
                ...state,
                data: data,
                filename: action.payload.filename,
                _id: action.payload.id,
                showFilter: new Array(data.length).fill(false)
            };

        default:
            return state;
    }
};
