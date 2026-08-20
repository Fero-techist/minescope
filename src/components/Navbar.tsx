import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./Navlink";
import Button from "./partials/buttons/Button";
import Text from "./text";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between gap-y-4 px-4 py-4 font-[Outfit] sm:px-6 sm:py-5 lg:flex-nowrap lg:px-10">
      {/* <h1 className="text-[#4EDEA3] font-bold text-xl">MineScope</h1> */}
      <Text
        variant="subheading"
        className="text-[#4EDEA3] font-bold text-xl"
      >
        MineScope
      </Text>

      <div className="hidden items-center gap-6 lg:flex">
        <NavLink label="Home" />
        <NavLink label="Explore Map" />
        <NavLink label="Features" />
        <NavLink label="Insights" />
        <NavLink label="About" />
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        <Link
          to="/login"
          className="text-gray-400 cursor-pointer"
        >
          Sign In
        </Link>

        <Link to="/signup">
          <Button>Get Started</Button>
        </Link>
      </div>

      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMenuOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-[#4EDEA3] hover:text-[#4EDEA3] lg:hidden"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="order-3 basis-full border-t border-white/10 pt-4 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            <NavLink label="Home" />
            <NavLink label="Explore Map" />
            <NavLink label="Features" />
            <NavLink label="Insights" />
            <NavLink label="About" />
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-end">
            <Link
              to="/login"
              className="text-gray-400 transition hover:text-white sm:px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="sm:flex-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
