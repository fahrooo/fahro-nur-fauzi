import {
  MdOutlineHome,
  MdHome,
  MdPersonOutline,
  MdPerson,
  MdOutlineWorkOutline,
  MdWork,
  MdOutlineCall,
  MdCall,
} from "react-icons/md";
import { Link } from "react-scroll";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 z-50 bg-white w-full border-t border-t-slate-400 dark:bg-dark dark:border-t-slate-700 md:hidden">
      <nav className="nav py-1 px-5 flex justify-center gap-16 text-[30px]">
        <Link activeClass="menu-bottom" smooth={true} spy={true} to="home" offset={-6}>
          <MdOutlineHome className="sub-menu text-slate-500 mx-auto mt-1" />
        </Link>
        <Link
          activeClass="menu-bottom"
          smooth={true}
          spy={true}
          to="about"
          offset={-5}
        >
          <MdPersonOutline className="sub-menu text-slate-500 mx-auto mt-1" />
        </Link>
        <Link activeClass="menu-bottom" smooth={true} spy={true} to="projects">
          <MdOutlineWorkOutline className="sub-menu text-slate-500 mx-auto mt-1" />
        </Link>
        <Link activeClass="menu-bottom" smooth={true} spy={true} to="contact">
          <MdOutlineCall className="sub-menu text-slate-500 mx-auto mt-1" />
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;
