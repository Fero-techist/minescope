type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
};

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const base = "px-6 py-3 rounded-xl text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#4EDEA3] to-[#00A572] text-black hover:bg-green-300"
      : "border border-gray-500 text-white hover:bg-gray-800";

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
