import { Divider } from "antd";
import React, { useEffect, useState } from "react";

const PlayerCard = ({ player }) => {
  const { name, positions, team, image } = player;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <h1 className="max-w-xs mx-auto text-lg uppercase md:max-w-2xl lg:max-w-3xl mt-7">
        Player Card
      </h1>
      <div className="flex flex-col max-w-4xl border-b border-solid lg:flex-row md:flex-row md:justify-between lg:justify-between md:mx-auto lg:mx-auto mt-18 border-b-black dark:border-b dark:border-b-white dark:border-solid ">
        <div className="w-full lg:w-[50%] max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out md:lg:max-w-2xl lg:max-w-5xl md:px-0 lg:px-6 md:py-4 lg:py-4 hover:scale-100 hover:-translate-y-1">
          <img className="w-full rounded-t-3xl" src={image} alt={name} />
        </div>
        <div className="px-6 py-4 ">
          <div
            className={` ${
              visible ? "animate-slide-in" : "opacity-0"
            } my-5 text-[50px] font-bold dark:text-[#b8b7b7] md:text-[40px] border-b border-b-black border-solid dark:border-b dark:border-b-white dark:border-solid`}
          >
            {name}
          </div>
          <p
            className={`${
              visible ? "animate-slide-in" : "opacity-0"
            } text-[30px] dark:text-[#b8b7b7] md:text-[20px]`}
          >
            Position: {positions?.join(", ")}
          </p>
          <p
            className={`${
              visible ? "animate-slide-in" : "opacity-0"
            } text-[30px] dark:text-[#b8b7b7] md:text-[20px]`}
          >
            FC: {team}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
