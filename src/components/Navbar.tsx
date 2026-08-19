import NavLink from "./Navlink";
import Button from "./partials/buttons/Button";
import Text from "./text";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex font-[Outfit] justify-between items-center px-10 py-5">
      {/* <h1 className="text-[#4EDEA3] font-bold text-xl">MineScope</h1> */}
      <Text
        variant="subheading"
        className="text-[#4EDEA3] font-bold text-xl"
      >
        MineScope
      </Text>

      <div className="flex gap-6">
        <NavLink label="Home" />
        <NavLink label="Explore Map" />
        <NavLink label="Features" />
        <NavLink label="Insights" />
        <NavLink label="About" />
      </div>

      <div className="flex gap-4 items-center">
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
    </nav>
  );
};

export default Navbar;
