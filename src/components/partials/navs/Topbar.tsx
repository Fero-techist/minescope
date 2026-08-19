// import { Search, Bell } from "lucide-react";

// const Topbar = () => {
//   return (
//     <header
//       className="
//         flex
//         justify-between
//         items-center
//       "
//     >
//       <h1
//         className="
//           text-3xl
//           font-bold
//           text-white
//         "
//       >
//         Dashboard
//       </h1>

//       {/* Right */}

//       <div
//         className="
//           flex
//           items-center
//           gap-6
//         "
//       >
//         {/* Search */}

//         <div
//           className="
//             flex
//             items-center
//             gap-3
//             bg-[#0B1730]
//             px-4
//             py-3
//             rounded-full
//             w-[300px]
//           "
//         >
//           <Search
//             size={18}
//             className="text-gray-400"
//           />

//           <input
//             type="text"
//             placeholder="Search geo-data..."
//             className="
//               bg-transparent
//               outline-none
//               text-white
//               w-full
//               placeholder:text-gray-500
//             "
//           />
//         </div>

//         {/* Notification */}

//         <button
//           className="
//             text-gray-400
//             hover:text-white
//           "
//         >
//           <Bell size={20} />
//         </button>

//         {/* User */}

//         <div
//           className="
//             flex
//             items-center
//             gap-3
//           "
//         >
//           <div>
//             <h3
//               className="
//                 text-sm
//                 text-white
//                 font-medium
//               "
//             >
//               Alex Rivers
//             </h3>

//             <p
//               className="
//                 text-xs
//                 text-gray-400
//               "
//             >
//               Chief Surveyor
//             </p>
//           </div>

//           <img
//             src="https://i.pravatar.cc/40"
//             alt=""
//             className="
//               w-10
//               h-10
//               rounded-full
//             "
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Topbar;

import { Search, Bell, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { sidebarItems } from "../../../data/Sidebardata";

type TopbarProps = {
  onOpenSidebar?: () => void;
};

const Topbar = ({ onOpenSidebar }: TopbarProps) => {
  const location = useLocation();
  const currentItem = sidebarItems.find(
    (item) => item.path === location.pathname,
  );
  const title = currentItem?.name ?? "Dashboard";

  return (
    <header className="flex min-w-0 flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 items-center">
        <div className="-ml-2 mr-3 md:hidden">
          <button
            className="text-gray-400"
            onClick={onOpenSidebar}
          >
            <Menu size={20} />
          </button>
        </div>

        <h1 className="truncate text-2xl font-bold text-white sm:text-3xl">{title}</h1>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4 lg:flex-none">
        <div className="order-last flex h-11 min-w-0 flex-1 items-center gap-3 rounded-full bg-[#0C1730] px-4 sm:order-none sm:w-[min(320px,40vw)] sm:flex-none">
          <Search
            size={16}
            className="text-gray-500"
          />

          <input
            placeholder="Search geo-data..."
            className="bg-transparent outline-none text-white placeholder:text-gray-500 text-sm w-full"
          />
        </div>

        <button className="text-gray-400 hover:text-white transition">
          <Bell size={18} />
        </button>

        <div className="hidden items-center gap-3 sm:flex">
          <div className="text-right">
            <h3 className="text-white font-semibold text-sm">Alex Rivers</h3>

            <p className="text-gray-500 text-xs">Chief Surveyor</p>
          </div>

          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="w-11 h-11 rounded-full border border-slate-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
