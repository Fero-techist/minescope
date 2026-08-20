import { useTheme } from "../../context/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`fixed right-4 top-0 z-20 flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold shadow-lg transition-all ${
        theme === "dark"
          ? "bg-white text-[#090E1C] hover:bg-gray-100"
          : "bg-[#090E1C] text-white hover:bg-gray-800"
      }`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      {/* <span>{theme === "dark" ? "Light" : "Dark"}</span> */}
    </button>
  );
}
