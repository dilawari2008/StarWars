import { FaCloudRain } from "react-icons/fa";
import { MdTerrain } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const CharacteristicsCard = ({ planet }) => {
  return (
    <div className="mt-2 flex flex-col w-full h-full">
      <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
        <div className="text-gray-300 w-1/3 flex gap-1 items-center">
        <FaCloudRain />
          <span>Climate</span>
        </div>
        <div className="font-bold  w-2/3">{planet?.climate}</div>
      </div>

      <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
        <div className="text-gray-300 w-1/3 flex gap-1 items-center">
          <MdTerrain />
          <span>Terrain</span>
        </div>
        <div className="font-bold  w-2/3">{planet?.terrain}</div>
      </div>

      <div className="flex gap-10 border-b border-[hsla(0,11%,65%,.2)] p-2 ">
        <div className="text-gray-300 w-1/3 flex gap-1 items-center">
        <FaMinusCircle />
          <span>Diameter</span>
        </div>
        <div className="font-bold  w-2/3">{planet?.diameter}</div>
      </div>

      <div className="flex gap-10 p-2 ">
        <div className="text-gray-300 w-1/3 flex gap-1 items-center">
        <MdOutlineGroups />
          <span>Population</span>
        </div>
        <div className="font-bold  w-2/3">{planet?.population}</div>
      </div>
    </div>
  );
};

export default CharacteristicsCard;
