import React from "react";
import CompanyLogo from "../../public/assets/company-logo.svg";

const LogoScreenSkeleton: React.FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <div className="flex flex-col items-center justify-center space-y-10">
        <img className="w-10 h-10" src={CompanyLogo} />
        {children}
      </div>
    </div>
  );
};

export default LogoScreenSkeleton;
