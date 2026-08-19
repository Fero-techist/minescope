import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

type TeamMemberCardProps = {
  name: string;
  role: string;
  avatar: string;
};

const TeamMemberCard = ({ name, role, avatar }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
      bg-[#121D35]

      border
      border-white/5

      rounded-3xl

      p-5

      flex
      items-center
      justify-between

      cursor-pointer
    "
    >
      {/* LEFT */}
      <div
        className="
        flex
        items-center
        gap-4
      "
      >
        <img
          src={avatar}
          alt={name}
          className="
          w-14
          h-14

          rounded-full

          object-cover

          border
          border-emerald-400/20
        "
        />

        <div>
          <h3
            className="
            text-xl
            font-semibold
            text-white
          "
          >
            {name}
          </h3>

          <p
            className="
            text-slate-500
            text-sm
          "
          >
            {role}
          </p>
        </div>
      </div>

      {/* ACTION */}
      <button
        className="
        text-slate-500

        hover:text-white

        transition
      "
      >
        <MessageSquare size={22} />
      </button>
    </motion.div>
  );
};

export default TeamMemberCard;
