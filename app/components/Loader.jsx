import Image from "next/image";
import LoaderSvg from "../../public/assets/svg-loaders/puff.svg"

const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center"><Image src={LoaderSvg} alt="loader"/></div>
  );
};

export default Loader;