import * as Type from '../action/types';

export const ConfigurationReducer = (state=[], action) => {
    switch (action.type) {
        case Type.GET_CONFIGURATION:
            return action.payload;
        default:
            return [];
    }
};
