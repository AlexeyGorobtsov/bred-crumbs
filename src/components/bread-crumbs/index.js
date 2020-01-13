import React, { useState } from "react";
import { BreadCrumbsButtons } from "./bread-crumbs-buttons";
import { AddressBar } from "./address-bar";
import { AddressBarList } from "./adrress-bar-list";

export function BreadCrumbs(props) {
  const { getAddressBarDataRequest, dataStructure } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [selectFolderID, setSelectFolderID] = useState(null);
  const [isShowAddressBarList, setIsShowAddressBarList] = useState(false);
  const addressBarProps = {
    getAddressBarDataRequest,
    setIsFocus,
    isFocus,
    query,
    setQuery,
    setIsShowAddressBarList,
    setSelectFolderID,
    isShowAddressBarList
  };
  const bredCrumbsButtonProps = {
    dataStructure,
    selectFolderID,
    setSelectFolderID,
    query,
    setQuery
  };
  const addressBarListProps = {
    dataStructure,
    setSelectFolderID,
    setQuery,
    isShowAddressBarList,
    setIsShowAddressBarList
  };

  return (
    <>
      <div className={"wrap-bred-crumb"}>
        <div className={"wrap-container-bread-crumbs"}>
          {!isFocus && selectFolderID && <BreadCrumbsButtons {...bredCrumbsButtonProps} />}
          <AddressBar {...addressBarProps}/>
        </div>
      </div>
      <AddressBarList {...addressBarListProps}/>
    </>
  )
}