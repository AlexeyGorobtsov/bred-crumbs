import React from "react";
import "./style.css";

export function AddressBarList(props) {
  const {
    dataStructure,
    setSelectFolderID,
    setQuery,
    isShowAddressBarList,
    setIsShowAddressBarList
  } = props;
  const findFolders = dataStructure.filter(item => item.type === "dir");

  return (
    <div className={"wrap-address-bar-list"}>
      {isShowAddressBarList && <ul className="folder-group">
        {findFolders.map(item =>
          <li
            key={item.id}
            className="folder-group-name"
            onClick={() => {
              setSelectFolderID(item.id);
              setQuery(item.label);
              setIsShowAddressBarList(false);
            }}
          >
            {item.label}
          </li>)}
      </ul>}
    </div>
  )
}