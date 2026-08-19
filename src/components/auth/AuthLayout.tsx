import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
  bgImage?: string;
  title?: string;
  heading?: React.ReactNode;
  description?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  bgImage,
  title = "MineScope",
  heading,
  description,
}) => {
  return (
    <div className="flex min-h-screen">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="hidden lg:grid w-1/2 bg-black bg-cover bg-center p-10 text-white"
      >
        <div>
          <h1 className="text-3xl text-[#34D399] font-Nunito font-extrabold mb-4">
            {title}
          </h1>
        </div>

        <div className="max-w-md">
          {heading && (
            <p className="text-[60px] font-Nunito leading-tight text-[#DAE2FD] font-extrabold mb-6">
              {heading}
            </p>
          )}

          {description && (
            <p className="text-[#DAE2FD] text-lg font-Outfit leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-[#0b1220] p-6">
        {children}
      </div>
    </div>
  );
};
