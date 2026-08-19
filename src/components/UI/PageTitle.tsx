import { useLocation } from "react-router-dom";
import { sidebarItems } from "../../data/Sidebardata";

type PageTitleProps = {
  fallback?: string;
  className?: string;
};

const PageTitle = ({
  fallback = "Dashboard",
  className = "",
}: PageTitleProps) => {
  const location = useLocation();
  const currentItem = sidebarItems.find(
    (item) => item.path === location.pathname,
  );
  const title = currentItem?.name ?? fallback;

  return <h1 className={className}>{title}</h1>;
};

export default PageTitle;
