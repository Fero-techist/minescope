type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-4">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
