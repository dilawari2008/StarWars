"use client";

import { useState, useEffect } from "react";

import PlanetGrid from "../components/PlanetGrid";
import Loader from "../components/Loader";

const PlanetDetails = () => {
  const [planets, setPlanets] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://swapi.dev/api/planets");
  const [prevUrl, setPrevUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add state for loading

  const fetchPlanets = async (url) => {
    setIsLoading(true); // Set loading to true before the fetch

    const res = await fetch(url);
    const planetList = await res.json();

    setPlanets(planetList?.results || []);
    setNextUrl(planetList?.next);
    setPrevUrl(planetList?.previous);

    setIsLoading(false); // Set loading to false after successful fetch
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
        {isLoading ? ( // Conditionally render loading indicator
          <Loader/>
        ) : (
            <PlanetGrid
              className="flex w-full h-full"
              planets={planets}
              nextUrl={nextUrl}
              prevUrl={prevUrl}
              onNext={onNext}
              onPrev={onPrev}
            />
        )}
      </div>
    </div>
  );
};

export default PlanetDetails;
