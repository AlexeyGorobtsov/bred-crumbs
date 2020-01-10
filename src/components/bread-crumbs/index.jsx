import React, {
    useState,
    useEffect,
    useReducer
} from "react";
import {dataFetchBredCrumbReducer} from "../../reducers/bread-crumbs-reducer";
import * as Actions from "../../actions";
import style from "./style.css";

export function BredCrumb() {
    const defaultUrl = "http://localhost:3030/";
    const [query, setQuery] = useState("root");
    const [state, setUrl ] = useDataSelectApi(defaultUrl, []);
    const { isLoading, isError, data } = state;

    return (
      <div className={"select-box"}>
        <input
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <button type='button' onClick={() => setUrl(defaultUrl + query)}>send</button>
      </div>
    )
}

const useDataSelectApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [state, dispatch] = useReducer(dataFetchBredCrumbReducer, {
        isLoading: false,
        isError: false,
        data: initialData
    });

    useEffect(() => {
        //let didCancel = false;
        const fetchData = async () => {
            dispatch(Actions.GET_BRED_CRUMBS_DATA_REQUEST);
            try {
                const response = await fetch(url);
                const result = await response.json();
                dispatch(Actions.getBredCrumbsDataSuccess(result));
            } catch (e) {
                dispatch({type: Actions.GET_BRED_CRUMBS_DATA_FAILURE})
            }
        };
        fetchData();


    }, [url]);

    return [state, setUrl];
};