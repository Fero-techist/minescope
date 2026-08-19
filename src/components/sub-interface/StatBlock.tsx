interface StatBlockProps {
  value: string;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => (
  <div className="flex flex-col gap-1">
    <span className="text-3xl font-bold text-emerald-400 tracking-tight leading-none">
      {value}
    </span>
    <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase font-mono mt-1">
      {label}
    </span>
  </div>
);
export default StatBlock;
