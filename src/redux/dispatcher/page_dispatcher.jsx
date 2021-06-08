import * as PageAction from "../action/page_action";

export const setPage = page => dispatch => {
    const action = PageAction.setPage(page);
    dispatch(action);
};
