import React from "react";

type ButtonProps = {
  label: string;
  onClick: (event: React.FormEvent) => void;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "primary" | "cancel";
};

const Button = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "my-4 py-2 px-4 rounded-md text-opacity-90 transition-all";

  const variantClasses = disabled
    ? "bg-gray-400 text-white cursor-not-allowed"
    : variant === "primary"
    ? "bg-purple-500 text-white hover:bg-purple-600"
    : "bg-white text-red-500 border border-red-500 hover:bg-red-50";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      <span className="font-semibold">{label}</span>
    </button>
  );
};

export default Button;
