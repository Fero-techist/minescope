import DocumentCard from "./DocumentCrd";
import { documents } from "./Documentdata";

const RecentDocuments = () => {
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
          Recent Documents
        </h2>

        <button
          className="
          text-emerald-400
          font-medium
        "
        >
          View Repository
        </button>
      </div>

      {/* GRID */}
      <div
        className="
        grid
        grid-cols-2
        gap-5
      "
      >
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            title={doc.title}
            size={doc.size}
            icon={doc.icon}
            iconBg={doc.iconBg}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentDocuments;
