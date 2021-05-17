import * as type from "../action/types";

const initialState = []

export const apkReducer = (state=initialState, action) => {
    switch (action.type) {
        case type.GET_APK:
            return [...action.payload.apks];
        default:
            return state;
    }
};
