type Props = {
  status: "ACTIVE" | "PENDING" | "COMPLETED";
};

const MiningBadge = ({ status }: Props) => {
  const styles = {
    ACTIVE: "bg-emerald-500/10 text-emerald-400",

    PENDING: "bg-yellow-500/10 text-yellow-400",

    COMPLETED: "bg-slate-500/10 text-slate-300",
  };

  return (
    <span
      className={`

px-3
py-1

rounded-full

text-xs

font-medium

${styles[status]}

`}
    >
      {status}
    </span>
  );
};

export default MiningBadge;
