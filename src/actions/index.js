export const GET_BRED_CRUMBS_DATA_REQUEST = "GET_BRED_CRUMBS_DATA_REQUEST";
export const GET_BRED_CRUMBS_DATA_SUCCESS = "GET_BRED_CRUMBS_DATA_SUCCESS";
export const GET_BRED_CRUMBS_DATA_FAILURE = "GET_BRED_CRUMBS_DATA_FAILURE";

export const getBredCrumbsDataRequest = query => ({
    type: GET_BRED_CRUMBS_DATA_REQUEST,
    query
});

export const getBredCrumbsDataSuccess = data => ({
    type: GET_BRED_CRUMBS_DATA_SUCCESS,
    data
});

export const getBredCrumbsDataFailure = error => ({
   type: GET_BRED_CRUMBS_DATA_FAILURE,
   error
});