import * as Types from "./types";

export const getConfiguration = async () => {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_CONFIGURATION_ENDPOINT);
    const json = await response.json();
    return {
        type: Types.GET_CONFIGURATION,
        payload: json.data
    }
}
