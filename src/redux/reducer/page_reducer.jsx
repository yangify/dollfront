import * as Type from '../action/types';
import * as Page from '../../pages';

export const PageReducer = (state=Page.HOME, action) => {
    switch (action.type) {
        case Type.CHANGE_PAGE:
            return action.payload;
        default:
            return Page.HOME;
    }
};
