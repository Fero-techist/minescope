import { Download } from "lucide-react";
import { motion } from "framer-motion";

type DocumentCardProps = {
  title: string;
  size: string;
  icon: React.ReactNode;
  iconBg: string;
};

const DocumentCard = ({ title, size, icon, iconBg }: DocumentCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
      bg-[#121D35]

      border
      border-white/5

      rounded-3xl

      p-5

      min-h-[210px]

      flex
      flex-col
      justify-between
    "
    >
      <div>
        {/* ICON */}
        <div
          className={`
          w-14
          h-14

          rounded-2xl

          flex
          items-center
          justify-center

          mb-6

          ${iconBg}
        `}
        >
          {icon}
        </div>

        {/* TITLE */}
        <h3
          className="
          text-xl
          font-semibold

          text-white

          leading-snug
        "
        >
          {title}
        </h3>
      </div>

      {/* FOOTER */}
      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <p
          className="
          text-slate-500
          text-sm
        "
        >
          {size}
        </p>

        <button
          className="
          text-slate-500

          hover:text-white

          transition
        "
        >
          <Download size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default DocumentCard;
