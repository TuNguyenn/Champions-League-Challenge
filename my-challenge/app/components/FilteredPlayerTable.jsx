import React, { useState } from "react";
import { playerArray } from "./data/data";

const FilteredPlayerTable = () => {
  const [selectedPosition, setSelectedPosition] = useState("");

  const filteredPlayers = selectedPosition
    ? playerArray.filter((player) =>
        player.positions.includes(selectedPosition)
      )
    : playerArray;
  return (
    <>
      <select
        className="p-2 border rounded-md"
        value={selectedPosition}
        onChange={(e) => setSelectedPosition(e.target.value)}
      >
        <option value="">All Positions</option>
        <option value="forward">Forward</option>
        <option value="goalkeeper">Goalkeeper</option>
      </select>
      
    </>
  );
};

export default FilteredPlayerTable;
