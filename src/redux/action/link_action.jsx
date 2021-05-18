import * as type from "./types";


export const getLink = async filename => {

    const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_LINK_ENDPOINT + `?filename=${filename}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        type: type.GET_LINK,
        payload: data
    }
}
