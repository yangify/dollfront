import * as type from "../action/types";

const initialState = {
    _id: '',
    data: [],
    filename: 'no file',
    isLoading: true,
    showFilter: [],
    shouldFilter: []
};

export const DetectionReducer = (state=initialState, action) => {
    switch (action.type) {

        case type.TOGGLE_FILTER_CHECKBOX:
            state.shouldFilter[action.payload] = !state.shouldFilter[action.payload];
            return {
                ...state,
                shouldFilter: state.shouldFilter
            }

        case type.TOGGLE_FILTER_BUTTON:
            state.showFilter[action.payload] = !state.showFilter[action.payload]
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
                showFilter: new Array(data.length).fill(false),
                shouldFilter: new Array(data.length).fill(true)
            };

        default:
            return state;
    }
};
