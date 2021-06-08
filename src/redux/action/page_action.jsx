import * as type from "./types";

export const changePage = page => {
    return {
        type: type.CHANGE_PAGE,
        payload: page
    }
}
