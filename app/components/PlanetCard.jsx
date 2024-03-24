import { useState } from "react";
import Loader from "./Loader";
import CharacteristicsCard from "./Characteristics";
import ResidentCard from "./Resident";
import FilmCard from "./Film";

const PlanetCard = ({ planet }) => {
  console.log("(PlanetCard) planet:", planet);

  const [isLoading, setIsLoading] = useState(false);
  const [tabs, setTabs] = useState({
    characteristics: true,
    residents: false,
    films: false,
  });

  const changeTab = (tab) => {
    setTabs({
      characteristics: false,
      residents: false,
      films: false,
      [tab]: true,
    });
  };

  return (
    <main className="w-full h-full">
      <div className="flex h-[40vh] w-full bg-[hsla(0,11%,65%,.137)] rounded-2xl hover:scale-105 hover:bg-neutral-800 transition ease-out duration-700 p-6">
        <div className="flex flex-col gap-4 font-mono w-full h-full">
          <div className="font-semibold text-2xl text-purple-800">
            {planet?.name}
          </div>
          <div className="flex gap-2 text-lg border-b w-full hover:cursor-pointer">
            <div
              className={`${
                tabs?.characteristics
                  ? "text-blue-400 bg-gray-950"
                  : "text-gray-500"
              } bg-transparent rounded-t-lg p-1`}
              onClick={() => changeTab("characteristics")}
            >
              Characteristics
            </div>
            <div
              className={`${
                tabs?.residents ? "text-blue-400 bg-gray-950" : "text-gray-500"
              } bg-transparent rounded-t-lg p-1`}
              onClick={() => changeTab("residents")}
            >
              Residents
            </div>
            <div
              className={`${
                tabs?.films ? "text-blue-400 bg-gray-950" : "text-gray-500"
              } bg-transparent rounded-t-lg p-1`}
              onClick={() => changeTab("films")}
            >
              Films
            </div>
          </div>
          <div className="w-full h-full items-center justify-center">
            {tabs?.characteristics ? (
              <CharacteristicsCard planet={planet}/>
            ) : tabs?.residents ? (
              <ResidentCard residentUrls={planet?.residents || []}/>
            ) : tabs?.films ? (
              <FilmCard filmUrls={planet?.films || []}/>
            ) : (
              <div>No Info Found</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanetCard;
