import React from "react";
import BredCrumb from "./containers/bread-crumbs";
import { ResultList } from "./components/result-list";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

      <BredCrumb/>

      <div className={"wrap-result-list"}>
        <ResultList/>
      </div>
    </div>
  );
}
