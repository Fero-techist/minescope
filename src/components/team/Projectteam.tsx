import TeamMemberCard from "./TeammemberCard";
import { teamMembers } from "./teamData";

const ProjectTeam = () => {
  return (
    <div
      className="
      bg-[#020B1D]

      rounded-[34px]
      

      border
      border-white/5

      p-8
    "
    >
      {/* HEADER */}
      <div
        className="
        flex
        items-center
        justify-between

        mb-8
      "
      >
        <h2
          className="
          text-3xl
          font-semibold
          text-white
        "
        >
          Project Team
        </h2>

        <button
          className="
          text-emerald-400
          font-medium
        "
        >
          Manage All
        </button>
      </div>

      <div className="space-y-5">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>

      <div className="mt-8 text-white text-center">
        {teamMembers.length} members in this project
      </div>
    </div>
  );
};

export default ProjectTeam;
