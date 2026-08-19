import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#2D3449] backdrop-blur-xl font-Nunito p-8 rounded-2xl shadow-xl w-full max-w-md">
      {children}
    </div>
  );
};
