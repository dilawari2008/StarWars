"use client";

import { useState, useEffect, Suspense } from "react";
import PlanetGrid from "../components/PlanetGrid";

const PlanetDetails = () => {
  const [planets, setPlanets] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://swapi.dev/api/planets");
  const [prevUrl, setPrevUrl] = useState(null);

  const fetchPlanets = async (url) => {
    const res = await fetch(url);
    const planetList = await res.json();
    console.log("planetList", planetList);
    setPlanets(planetList?.results || []);
    setNextUrl(planetList?.next);
    setPrevUrl(planetList?.previous);
  };

  useEffect(() => {
    fetchPlanets(nextUrl);
  }, []);

  const onNext = async () => {
    await fetchPlanets(nextUrl);
  };

  const onPrev = async () => {
    await fetchPlanets(prevUrl);
  };

  return (
    <div className="flex flex-col  items-center justify-center text-white w-full h-full">
      <h2 className="text-white text-3xl font-semibold font-heading text-center">
        Unveiling the Wonders: A Guide to Star Wars{" "}
        <span className="bg-gradient-to-t bg-clip-text  text-transparent from-red-500 via-orange-500 to-gray-50 animate-text">
          Planets
        </span>
      </h2>

      <div className="w-full h-full">
        <Suspense fallback={<div>Loading user profile...</div>}>
          <PlanetGrid
            className="flex w-full h-full"
            planets={planets}
            nextUrl={nextUrl}
            prevUrl={prevUrl}
            onNext={onNext}
            onPrev={onPrev}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default PlanetDetails;
