import * as Actions from "../actions";

export const dataFetchBredCrumbReducer = (state, action) => {
    switch (action.type) {
        case Actions.GET_BRED_CRUMBS_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case Actions.GET_BRED_CRUMBS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.data
            };
        case Actions.GET_BRED_CRUMBS_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default: return {...state};
    }
};