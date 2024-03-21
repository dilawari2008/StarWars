import PlanetCard from "./PlanetCard";

/* eslint-disable react/jsx-key */
const PlanetGrid = ({ planets }) => {
  return (
    <div>
      <div className="w-full h-full p-2 grid grid-cols-4 gap-4 p-6">
        {planets?.map((planet) => {
          return (
            <div className="col-span-1">
              <PlanetCard planet={planet} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-5 mb-10 gap-10">
        <div className="pill bg-red-900 hover:bg-red-500">
          {`<- Prev`}
        </div>
        <div className="pill bg-red-900 hover:bg-red-500">
          {`Next ->`}
        </div>
      </div>
    </div>
  );
};

export default PlanetGrid;
