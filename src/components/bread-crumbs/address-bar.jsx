import React, { useRef } from "react";
import "./style.css";

export function AddressBar(props) {
  const inputEl = useRef(null);
  const {
    getAddressBarDataRequest,
    setIsFocus,
    isFocus,
    query,
    setQuery,
    setIsShowAddressBarList,
    setSelectFolderID,
    isShowAddressBarList
  } = props;

  return (
    <div className={"select-box"}>
      <input
        className={"search-line"}
        type='text'
        value={isFocus || isShowAddressBarList ? query : ""}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={inputEl}
      />
      <button
        type='button'
        onClick={() => {
          getAddressBarDataRequest(query);
          inputEl.current.focus();
          setIsShowAddressBarList(true);
          setSelectFolderID(null);
        }}
        className={"button-search"}
      >
        &#8634;
      </button>
    </div>
  )
}