import * as type from "../action/types";

export const apkReducer = (state=[], action) => {
    switch (action.type) {
        case type.GET_APK:
            return [...action.payload.apks];
        default:
            return state;
    }
};
