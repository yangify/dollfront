import * as type from "../action/types";

const initialState = {
    list: [],
    selected: {
        name: ''
    }
}

export const ApkReducer = (state=initialState, action) => {
    switch (action.type) {
        case type.GET_APK:
            const first = action.payload.apks[0];
            const selected = first === undefined || first === null ? state.selected : first
            return {
                list: action.payload.apks,
                selected: selected
            };
        case type.SELECT_APK:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
};
