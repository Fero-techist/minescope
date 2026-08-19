type TextProps = {
  children: React.ReactNode;
  variant?: "heading" | "subheading" | "preheading" | "body" | "caption";
  className?: string;
};

const Text = ({ children, variant = "body", className = "" }: TextProps) => {
  const base = "text-[#DEE1F7]";

  const styles = {
    heading: "text-5xl md:text-6xl font-bold",
    preheading: "text-4xl md:text-5xl font-semibold",
    subheading: "text-xl text-gray-300",
    body: "text-[#C2C6D6] text-base",
    caption: "text-sm text-gray-500",
  };

  return (
    <p className={`${base} ${styles[variant]} ${className}`}>{children}</p>
  );
};

export default Text;
