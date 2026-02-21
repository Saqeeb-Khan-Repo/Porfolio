import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Nav = ({isOpen,onLinkClick}) => {
  return (
    <>
       <nav className={`${isOpen ? 'flex flex-col gap-4 text-lg font-semibold' : 'flex gap-3.5 text-sm'}`}>
      {links.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          className="hover:text-cyan-400 transition-colors block py-2 lg:inline-block"
          onClick={onLinkClick}
        >
          {name}
        </NavLink>
      ))}
    </nav>
    </>
  );
};

export default Nav;
