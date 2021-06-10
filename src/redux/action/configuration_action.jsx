import * as Types from "./types";

export const getConfiguration = async () => {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_CONFIGURATION_ENDPOINT);
    const json = await response.json();
    return {
        type: Types.GET_CONFIGURATION,
        payload: json.data
    }
}

export const deleteConfiguration = async configuration => {
    const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_CONFIGURATION_ENDPOINT + '/' + configuration._id
    const config = { method: "DELETE" }

    const response = await fetch(url, config);
    const json = await response.json();

    return {
        type: Types.DELETE_CONFIGURATION,
        payload: json.data
    }
}
