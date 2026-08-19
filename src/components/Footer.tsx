import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brandName?: string;
  description?: string;
  sections?: FooterSection[];
}

const defaultSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { label: "Explore Map", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const Footer: React.FC<FooterProps> = ({
  brandName = "MineScope",
  description = "Leading the frontier in geological intelligence and subsurface data visualization through advanced satellite and terrestrial sensing technologies.",
  sections = defaultSections,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <footer className="bg-[#020C1B] font-[Lato] text-gray-400 px-6 md:px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">{brandName}</h2>
          <p className="text-sm leading-relaxed max-w-xs">{description}</p>
        </div>
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm tracking-widest font-[Outfit] text-green-400 uppercase mb-4">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm tracking-widest text-green-400 uppercase mb-4">
            Intelligence Hub
          </h3>
          <p className="text-xs mb-3">Subscribe to the insight brief</p>
          <div className="flex items-center bg-[#0A192F] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent px-4 py-2 text-sm outline-none w-full"
            />
            <button className="bg-green-500 px-4 py-2 text-black font-bold hover:bg-green-400">
              ➤
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p> {brandName} </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white"
          >
            Legal
          </a>
        </div>
      </div>

      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          whileHover={{ scale: 1.15 }}
          className="fixed bottom-6 right-6 p-3 justify-center items-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-lg"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
