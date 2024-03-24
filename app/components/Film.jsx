"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";

import { MdOutlineTitle } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const FilmCard = ({ filmUrls }) => {
  const [film, setFilm] = useState(null);
  const [currentFilm, setCurrentFilm] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getNextFilm = async () => {
    try {
      setIsLoading(true);
      const currentFilmUrl =
        filmUrls?.[currentFilm % filmUrls?.length];
      const res = await fetch(currentFilmUrl);
      const filmObject = await res?.json();
      setFilm(filmObject);
      setCurrentFilm(currentFilm + 1);
      setIsLoading(false);
    } catch (err) {
      console.log(`(getNextFilm) error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getPrevFilm = async () => {
    try {
      setIsLoading(true);
      const currentFilmUrl =
        filmUrls?.[currentFilm % filmUrls?.length];
      const res = await fetch(currentFilmUrl);
      const filmObject = await res?.json();
      setFilm(filmObject);
      let prevFilm = currentFilm - 1;
      if (prevFilm < 0) prevFilm += filmUrls?.length || 0;
      setCurrentFilm(prevFilm);
    } catch (err) {
      console.log(`(getPrevFilm) error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNextFilm();
  }, [filmUrls]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : filmUrls?.length > 0 ? (
        <div className="flex flex-col h-full w-full">
          <div className="mt-2 flex flex-col w-full h-full">
            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><MdOutlineTitle /><span>Title</span></div>
              <div className="font-bold  w-2/3 line-clamp-1">
                {film?.title}
              </div>
            </div>

            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><MdCameraRoll /><span>Director</span></div>
              <div className="font-bold  w-2/3 line-clamp-1">
                {film?.director}
              </div>
            </div>

            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><MdAttachMoney /><span>Producer</span></div>
              <div className="font-bold  w-2/3 line-clamp-1">
                {film?.producer}
              </div>
            </div>

            <div className="flex gap-10 p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><CiCalendarDate/><span>Release</span></div>
              <div className="font-bold  w-2/3 line-clamp-1">
                {film?.release_date}
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-end justify-end">
            <div className="flex gap-10">
              <div
                className="bg-red-900 hover:bg-red-500 h-6 w-6 rounded-full flex items-center justify-center"
                onClick={() => getPrevFilm()}
              >
                {`<`}
              </div>
              <div
                className="bg-red-900 hover:bg-red-500 h-6 w-6 rounded-full flex items-center justify-center "
                onClick={() => getNextFilm()}
              >
                {`>`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">No Films Found</div>
      )}
    </>
  );
};

export default FilmCard;
