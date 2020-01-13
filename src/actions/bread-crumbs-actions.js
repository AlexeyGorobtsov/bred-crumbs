const axios = require("axios");

export const GET_ADDRESS_BAR_DATA_REQUEST = "GET_ADDRESS_BAR_DATA_REQUEST";
export const GET_ADDRESS_BAR_DATA_SUCCESS = "GET_ADDRESS_BAR_DATA_SUCCESS";
export const GET_ADDRESS_BAR_DATA_FAILURE = "GET_ADDRESS_BAR_DATA_FAILURE";

const defaultUrl = "http://localhost:3030/";

export const getAddressBarDataSuccess = data => ({
  type: GET_ADDRESS_BAR_DATA_SUCCESS,
  data
});

export const getAddressBarDataFailure = error => ({
  type: GET_ADDRESS_BAR_DATA_FAILURE,
  error
});

export const getAddressBarDataRequest = query => {
  return function (dispatch) {
    dispatch({ type: GET_ADDRESS_BAR_DATA_REQUEST });
    return axios.get(defaultUrl + query)
      .then(function (response) {
        dispatch(getAddressBarDataSuccess(response.data));

      })
      .catch(function (error) {
        dispatch(getAddressBarDataFailure(error));
      })
  }
};
