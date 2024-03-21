import StarWarsLogo from "../../public/assets/starWars.png";
import Image from "next/image";

const NavBar = () => {
  return(
    <>
      <nav className="flex justify-left items-center pl-2 pt-2 w-screen">
        <Image src={StarWarsLogo} width={80} />
      </nav>
    </>
  );
};

export default NavBar;