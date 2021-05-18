import * as type from "../action/types";

const initialState = {
    list: [],
    selected: {}
}

export const apkReducer = (state=initialState, action) => {
    switch (action.type) {
        case type.GET_APK:
            return {
                list: action.payload.apks,
                selected: action.payload.apks[0]
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
