type FeatureItemProps = {
  text: string;
};

const FeatureItem = ({ text }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <div className="w-2 h-2 bg-green-400 rounded-full" />
      <span>{text}</span>
    </div>
  );
};

export default FeatureItem;
