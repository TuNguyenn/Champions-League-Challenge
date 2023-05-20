import React, { useState } from "react";
import { playerArray } from "./data/data";

const FilteredPlayerTable = ({ selectedPosition, handlePositionChange }) => {
  return (
    <select
      id="position"
      value={selectedPosition}
      onChange={handlePositionChange}
      className="p-1 mb-5 border border-gray-300 rounded"
    >
      <option value="">All</option>
      <option value="forward">Forward</option>
      <option value="goalkeeper">Goalkeeper</option>
    </select>
  );
};

export default FilteredPlayerTable;
