import React, { useState } from "react";
import classNames from "classnames";
import { getSubfolders } from "../../common-functions";

import { BreadCrumb } from "./bread-crumb";
import "./style.css";

export function BreadCrumbsButtons(props) {
  const {
    dataStructure,
    selectFolderID,
    query,
    setQuery
  } = props;
  const [urlID, setUrlID] = useState(selectFolderID);
  const subfolders = getSubfolders(dataStructure, urlID);

  console.log({ dataStructure, selectFolderID, subfolders });
  const { breadCrumbsArray } = subfolders || {};

  return (
    <>
      {breadCrumbsArray.map(item => {
        const BreadCrumbProps = {
          urlID,
          setUrlID,
          breadCrumbsStructure: item,
          query,
          setQuery
        };
        return <BreadCrumb key={item.id} {...BreadCrumbProps} />
      })}
    </>
  )
}