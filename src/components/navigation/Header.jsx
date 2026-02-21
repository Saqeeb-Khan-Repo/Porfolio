import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-slate-800 text-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-semibold xl:text-3xl">
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Portfolio
              </Link>
            </h1>
            <span className="text-3xl font-bold text-cyan-500">.</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-3.5 items-center">
            <Nav isOpen={false} /> {/* Pass false or handle via props */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:translate-y-0.5 hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-700/50 lg:hidden font-bold text-3xl transition-colors"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 w-72 h-full bg-slate-800 text-slate-100 lg:hidden z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
          >
            <div className="p-6 flex flex-col h-full">
              <button
                className="self-end p-2 text-slate-200 hover:bg-slate-700/50 rounded-md mb-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <RxCross2 className="text-2xl" />
              </button>

              <Nav isOpen={true} onLinkClick={() => setIsOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
