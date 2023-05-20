"use client";

import PlayerCard from "./components/PlayerCard";
import PlayerTable from "./components/PlayerTable";
import { haaland } from "./components/data/data";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-full m-auto">
        <div>
          <PlayerCard player={haaland} />
          <PlayerTable />
        </div>
      </main>
    </>
  );
}
