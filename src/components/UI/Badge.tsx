// const Badge = () => {
//   return (
//     <div className="text-xs font-[Lato] px-4 py-1 rounded-full bg-gray-800 text-[#6FFBBE] inline-block">
//       ● REVOLUTIONIZING SUBSURFACE INTELLIGENCE
//     </div>
//   );
// };

// export default Badge;

type BadgeProps = {
  text: string;
  className?: string;
};

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <div
      className={`
        text-xs
        font-[Lato]
        px-4
        py-1
        rounded-full
        bg-gray-800
        text-[#6FFBBE]
        inline-block
        ${className}
      `}
    >
      ● {text}
    </div>
  );
};

export default Badge;
