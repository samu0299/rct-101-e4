import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([{}]);

  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
          {/* 
            create rows for countries
          */}
      </table>

      <div>
        <ButtonComponent id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" />
        <ButtonComponent id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
