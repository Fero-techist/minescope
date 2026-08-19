type NavLinkProps = {
  label: string;
};

const NavLink = ({ label }: NavLinkProps) => {
  return (
    <a className="text-gray-400 hover:text-white cursor-pointer">{label}</a>
  );
};

export default NavLink;
