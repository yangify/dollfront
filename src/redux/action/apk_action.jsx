import * as type from "./types";

export const getApk = async () => {
    const response = await fetch('http://localhost:5000/api/apk');
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
