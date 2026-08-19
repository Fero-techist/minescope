type Props = {
  status: string;
};

const StatusBadge = ({ status }: Props) => {
  const styles = {
    Active: "bg-emerald-500/10 text-emerald-400",

    Review: "bg-orange-500/10 text-orange-400",

    Pending: "bg-sky-500/10 text-sky-400",
  };

  return (
    <span
      className={`

px-3
py-1

rounded-full

text-xs

font-medium


${styles[status as keyof typeof styles]}

`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
