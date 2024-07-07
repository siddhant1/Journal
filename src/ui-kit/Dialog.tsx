import React from "react";

interface PaperProps {
  heading?: string;
  subheading?: string;
}

const Paper: React.FC<PaperProps> = ({ heading, subheading, children }) => {
  return (
    <div className="bg-background-primary flex flex-col  justify-center items-center  rounded-lg shadow-lg py-10 px-6 min-w-[463px]">
      {heading && (
        <h2 className="text-heading font-normal mb-2 text-heading-primary tracking-[-0.25px]">
          {heading}
        </h2>
      )}
      {subheading && (
        <p className="mb-4 text-lg font-semibold text-white">{subheading}</p>
      )}
      {children}
    </div>
  );
};

export default Paper;
