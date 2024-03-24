"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiLineHeight } from "react-icons/ci";
import { BsGenderFemale } from "react-icons/bs";
import { FaWeight } from "react-icons/fa";

const ResidentCard = ({ residentUrls }) => {
  const [resident, setResident] = useState(null);
  const [currentResident, setCurrentResident] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getNextResident = async () => {
    try {
      setIsLoading(true);
      const currentResidentUrl =
        residentUrls?.[currentResident % residentUrls?.length];
      const res = await fetch(currentResidentUrl);
      const residentObject = await res?.json();
      setResident(residentObject);
      setCurrentResident(currentResident + 1);
      setIsLoading(false);
    } catch (err) {
      console.log(`(getNextResident) error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getPrevResident = async () => {
    try {
      setIsLoading(true);
      const currentResidentUrl =
        residentUrls?.[currentResident % residentUrls?.length];
      const res = await fetch(currentResidentUrl);
      const residentObject = await res?.json();
      setResident(residentObject);
      let prevResident = currentResident - 1;
      if (prevResident < 0) prevResident += residentUrls?.length || 0;
      setCurrentResident(prevResident);
    } catch (err) {
      console.log(`(getPrevResident) error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNextResident();
  }, [residentUrls]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : residentUrls?.length > 0 ? (
        <div className="flex flex-col h-full w-full">
          <div className="mt-2 flex flex-col w-full h-full">
            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><MdDriveFileRenameOutline /><span>Name</span></div>
              <div className="font-bold  w-2/3">
                {resident?.name}
              </div>
            </div>

            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><CiLineHeight /><span>Height</span></div>
              <div className="font-bold  w-2/3">
                {resident?.height}
              </div>
            </div>

            <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><BsGenderFemale /><span>Gender</span></div>
              <div className="font-bold  w-2/3">
                {resident?.gender}
              </div>
            </div>

            <div className="flex gap-10 p-2 ">
              <div className="text-gray-300 w-1/3 flex gap-1 items-center"><FaWeight /><span>Mass</span></div>
              <div className="font-bold  w-2/3">
                {resident?.mass}
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-end justify-end">
            <div className="flex gap-10">
              <div
                className="disabled pill bg-red-900 hover:bg-red-500"
                onClick={() => getPrevResident()}
              >
                {`<- Prev`}
              </div>
              <div
                className="disabled pill bg-red-900 hover:bg-red-500"
                onClick={() => getNextResident()}
              >
                {`Next ->`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">No Residents Found</div>
      )}
    </>
  );
};

export default ResidentCard;
