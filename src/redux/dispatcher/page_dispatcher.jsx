import * as PageAction from "../action/page_action";

export const changePage = page => dispatch => {
    const action = PageAction.changePage(page);
    dispatch(action);
};
