import React, { useState } from "react";
import "./style.css";
import { getSubfolders } from "../../common-functions";
import { BreadCrumbsList } from "./bread-crumbs-list";
import classNames from "classnames";

export function BreadCrumb(props) {
  const {
    breadCrumbsStructure = {},
    urlID,
    setUrlID,
    query,
    setQuery,
  } = props;

  const [isActive, setActive] = useState(false);
  const [subFolders, setSubfolders] = useState([]);
  const crumbsArrowStyle = classNames({
    ["active"]: isActive,
    ["crumbs-arrow"]: true
  });
  console.log({breadCrumbsStructure});
  const breadCrumbsListProps = {
    isActive,
    subFolders,
    urlID,
    setUrlID,
    query,
    setQuery
  };
  return (
    <div className={"wrap-container-crumbs-button"}>
      <div className={"wrap-crumbs-button"}>
        <button className={"crumbs-button"}>{breadCrumbsStructure.label}</button>
        <button
          className={crumbsArrowStyle}
          onClick={() => {
            setActive(!isActive);
            setSubfolders(breadCrumbsStructure.child);
          }}
        >&rsaquo;</button>
      </div>
      <BreadCrumbsList {...breadCrumbsListProps} />
    </div>
  )
}