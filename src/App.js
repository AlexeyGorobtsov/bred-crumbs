import React from "react";
import {BredCrumb} from "./components/bread-crumbs";
import {ResultList} from "./components/result-list";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className={"wrap-bred-crumb"}>
        <BredCrumb />
      </div>
      <div className={"wrap-result-list"}>
        <ResultList />
      </div>
    </div>
  );
}
