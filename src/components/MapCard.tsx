import FloatingCard from "./FloatingCard";
import Topographic from "../assets/Topographic satellite view.png";

const MapCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img
        src={Topographic}
        alt="map"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-6 left-6">
        <FloatingCard
          title="ACTIVE SITE: REGION-09"
          value="14.2%"
          subtitle="Cluster Density"
        />
      </div>

      <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl w-64">
        <div className="h-2 bg-gray-700 rounded-full">
          <div className="h-2 bg-green-400 rounded-full w-[75%]" />
        </div>
        <p className="text-xs text-gray-300 mt-2">SCANNING PROGRESS 75%</p>
      </div>
    </div>
  );
};

export default MapCard;
