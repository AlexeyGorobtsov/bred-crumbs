import * as Actions from "../actions/bread-crumbs-actions";
const initialState = {
  dataStructure: [],
  isLoading: false,
  isError: false
};
export const bredCrumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ADDRESS_BAR_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case Actions.GET_ADDRESS_BAR_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataStructure: action.data
      };
    case Actions.GET_ADDRESS_BAR_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return { ...state };
  }
};