import { GET_APK } from "./types";

export const getApk = async () => {
    const response = await fetch('http://localhost:5000/api/apk');
    const data = await response.json();
    return {
        type: GET_APK,
        payload: data
    }
}
