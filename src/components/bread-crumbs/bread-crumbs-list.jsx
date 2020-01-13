import React from "react";
import classNames from "classnames";
import "./style.css";

export function BreadCrumbsList(props) {
  const {
    isActive,
    subFolders,
    urlID,
    setUrlID,
    query,
    setQuery
  } = props;

  const folderGroupStyle = classNames({
    ["folder-group"]: true,
    ["crumbs-list-active"]: true
  });

  const getOnlyFolders = subFolders.filter(item => item.type === "dir");

  return (
    <div className={"wrap-bread-crumbs-list"}>
      {isActive && <ul className={folderGroupStyle}>
        {getOnlyFolders && getOnlyFolders.map(item =>
          <li
            key={item.id}
            className="folder-group-name"
            onClick={() => {
              setUrlID(`${urlID}/${item.id}`);
              setQuery(`${query}/${item.label}`);
            }}
          >{item.label}
          </li>)}
      </ul>}
    </div>
  )
}