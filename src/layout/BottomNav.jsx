import { NavLink } from "react-router-dom";

import SearchIcon from "../assets/search.svg";
import HomeIcon from "../assets/home.svg";
import Hamburger from "../components/Hamburger";

export default function BottomNav() {
  const activeNavLink = ({ isActive }) => {
    return `flex justify-center items-center h-full flex-1 ${
      isActive ? `bg-zinc-700/30` : `bg-none`
    }`;
  };
  return (
    <>
      <section className="flex justify-between items-center h-18 w-full bg-zinc-800 fixed bottom-0 left-0 md:hidden">
        <NavLink to="/" className={activeNavLink}>
          <img src={HomeIcon} alt="Home" className="h-10" />
        </NavLink>
        <NavLink to="/search" className={activeNavLink}>
          <img src={SearchIcon} alt="Search" className="h-10" />
        </NavLink>
      </section>
    </>
  );
}
