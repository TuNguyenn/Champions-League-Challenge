import React, { useState } from "react";
import { playerArray } from "./data/data";
import { Empty } from "antd";

const PlayerTable = () => {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  const filteredPlayers = selectedPosition
    ? playerArray.filter((player) =>
        player.positions.includes(selectedPosition)
      )
    : playerArray;
  return (
    <>
      <h1 className="max-w-xs mx-auto text-lg uppercase md:max-w-2xl lg:max-w-3xl my-7">
        Player Table
      </h1>
      <div className="flex justify-end max-w-xs mx-auto md:max-w-2xl lg:max-w-7xl ">
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
      </div>
      <div className="max-w-xs mx-auto overflow-scroll md:max-w-2xl lg:max-w-7xl h-96 ">
        {filteredPlayers.map((item) => {
          return (
            <div key={item.id} className=" w-full flex items-center mb-4 lg:px-10 md:px-10 px-2 gap-[5px] md:gap-[100px] lg:gap-[200px] border-b-black dark:border-b dark:border-b-white dark:border-solid">
              <img
                className=" w-[40%] lg:w-[20%] rounded-full"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col gap-[5px] lg:gap-[50px] lg:text-[24px] md:lg:text-[24px]  w-full ">
                <div className="flex items-center justify-between w-full">
                  <p>Name:</p>
                  <p className="lg:text-[35px] lg:font-bold">{item.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Positions:</p>
                  <p className="lg:text-[35px] lg:font-bold">
                    {item.positions}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>FC:</p>
                  <p className="lg:text-[35px] lg:font-bold">{item.team}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlayerTable;
