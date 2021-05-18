import * as type from "./types";

export const getApk = async () => {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_APK_ENDPOINT);
    const data = await response.json();
    return {
        type: type.GET_APK,
        payload: data
    }
}

export const selectApk = apk => {
    return {
        type: type.SELECT_APK,
        payload: apk
    }
}
