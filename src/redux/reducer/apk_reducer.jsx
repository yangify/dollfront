import { GET_APK } from "../action/types";

const initialState = {
    list: [],
    selected: {}
}

export const apkReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_APK:
            return {
                list: action.payload.apks,
                selected: action.payload.apks[0]
            };
        default:
            return state;
    }
};
