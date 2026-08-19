interface ISize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
}

export const formatSizes = (size: keyof ISize) => {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "md":
      return "text-md";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
    case "5xl":
      return "text-5xl";
    case "6xl":
      return "text-6xl";
    default:
      return "text-base";
  }
};

export const formatWeight = (weight: string) => {
  switch (weight) {
    case "lighter":
      return "lighter";
    case "light":
      return "light";
    case "normal":
      return "normal";
    case "medium":
      return "medium";
    case "semibold":
      return "semibold";
    case "bold":
      return "bold";
    case "extrabold":
      return "extrabold";
    default:
      return "normal";
  }
};

export const random = (size = 6, isAlpha = false) => {
  const pool = isAlpha
    ? "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789abcdefghijklmnpqrstuvwxyz"
    : "0123456789";
  const rand = [];
  let i = -1;

  while (++i < size)
    rand.push(pool.charAt(Math.floor(Math.random() * pool.length)));

  return rand.join("");
};
