import PlanetCard from "./PlanetCard";

/* eslint-disable react/jsx-key */
const PlanetGrid = ({ planets, nextUrl, prevUrl, onNext, onPrev }) => {
  return (
    <div>
      <div className="w-full h-full p-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-6">
        {planets?.map((planet) => {
          return (
            <div className="col-span-1">
              <PlanetCard planet={planet} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-5 mb-10 gap-10">
        {prevUrl ? (
          <div
            className="disabled pill bg-red-900 hover:bg-red-500"
            onClick={() => onPrev()}
          >
            {`<- Prev`}
          </div>
        ) : (
          <div className="pill-disabled bg-red-950">{`<- Prev`}</div>
        )}
        {nextUrl ? (
          <div
            className="pill bg-red-900 hover:bg-red-500"
            onClick={() => onNext()}
          >
            {`Next ->`}
          </div>
        ) : (
          <div className="pill-disabled bg-red-950">{`Next ->`}</div>
        )}
      </div>
    </div>
  );
};

export default PlanetGrid;
