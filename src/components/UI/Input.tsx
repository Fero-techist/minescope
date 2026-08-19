import React from "react";

type InputProps = {
  label?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}

      <div className=" flex items-center bg-gray-800 rounded-lg">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-4 py-3 rounded-lg w-full border-none bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
        />

        {icon && <div className="mr-2">{icon}</div>}
      </div>
    </div>
  );
};
