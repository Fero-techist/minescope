type FloatingCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

const FloatingCard = ({ title, value, subtitle }: FloatingCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 text-white shadow-lg">
      <p className="text-xs text-gray-300">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default FloatingCard;
