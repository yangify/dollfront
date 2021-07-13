import * as type from "./types";


export const getDetections = async filename => {

    const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_LINK_ENDPOINT + `?filename=${filename}`;
    const params = {'filename': filename}
    const response = await fetch(url, params);
    const data = await response.json();

    return {
        type: type.GET_DETECTION,
        payload: data
    }
}

export const toggleLoadingState = status => {
    return {
        type: type.SET_DETECTION_LOADING,
        payload: status
    }
}

export const toggleFilterButton = index => {
    return {
        type: type.TOGGLE_FILTER_BUTTON,
        payload: index
    }
}

export const toggleFilterCheckbox = index => {
    return {
        type: type.TOGGLE_FILTER_CHECKBOX,
        payload: index
    }
}
