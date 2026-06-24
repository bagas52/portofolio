import React from "react";

interface FigmaIconProps {
  className?: string;
  size?: number;
}

export const FigmaIcon: React.FC<FigmaIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 0C10.7157 0 4 6.71573 4 15V19C4 21.0503 5.03401 22.859 6.61118 23.94C5.03401 25.021 4 26.8297 4 28.88V38C4 46.2843 10.7157 53 19 53C27.2843 53 34 46.2843 34 38V15C34 6.71573 27.2843 0 19 0Z"
        fill="none"
      />
      {/* Red: top left circle */}
      <path
        d="M19 0H9.5C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19H19V0Z"
        fill="#F24E1E"
      />
      {/* Purple: top right circle */}
      <path
        d="M28.5 0H19V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0Z"
        fill="#A259FF"
      />
      {/* Pink/Magenta: mid left circle */}
      <path
        d="M19 19H9.5C4.25329 19 0 23.2533 0 28.5C0 33.7467 4.25329 38 9.5 38H19V19Z"
        fill="#18A2F2"
      />
      {/* Green: bottom left waterdrop */}
      <path
        d="M9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38Z"
        fill="#0ACF83"
      />
      {/* Orange/Yellow-orange: mid right circle */}
      <path
        d="M28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19Z"
        fill="#FF7262"
      />
    </svg>
  );
};
