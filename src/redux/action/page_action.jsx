import * as Types from "./types";

export const setPage = page => {
    return {
        type: Types.SET_PAGE,
        payload: page
    }
}
