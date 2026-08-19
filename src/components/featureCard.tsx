type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 text-white">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400/10 text-green-400 mb-4">
        <Icon size={20} />
      </div>

      <h3 className="text-lg font-[Outfit] font-semibold">{title}</h3>

      <p className="text-gray-400 font-[Lato] mt-3 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
