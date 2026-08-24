import { clsx } from "clsx";
import { ButtonProps } from "@/types";

const Button = ({
  variant = "primary",
  children,
  className,
  type = "button",
  disabled = false,
  tail = "none",
  ...props
}: ButtonProps) => {
  const base =
    "relative px-6 py-3 font-medium transition-all cursor-pointer hover:opacity-70 hover:-translate-y-0.5 flex items-center justify-center";

  const variants = {
    primary: "bg-brand-white border-2 border-brand-black text-brand-black",
    secondary: "bg-brand-black border-2 border-brand-black text-brand-white",
  };

  const tailFills = {
    primary: "fill-brand-black",
    secondary: "fill-brand-black",
  };

  const tailConfigs = {
    "top-right": {
      className: "absolute -top-4 -right-[2px] w-4 h-4 pointer-events-none",
      path: "M16 0 L16 16 L0 16 Z",
    },
    "top-left": {
      className: "absolute -top-4 -left-[2px] w-4 h-4 pointer-events-none",
      path: "M0 0 L16 16 L0 16 Z",
    },
    "bottom-right": {
      className: "absolute -bottom-4 -right-[2px] w-4 h-4 pointer-events-none",
      path: "M0 0 L16 0 L16 16 Z",
    },
    "bottom-left": {
      className: "absolute -bottom-4 -left-[2px] w-4 h-4 pointer-events-none",
      path: "M0 0 L16 0 L0 16 Z",
    },
  };

  const currentTail = tail !== "none" ? tailConfigs[tail] : null;

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}

      {currentTail && (
        <svg
          className={clsx(currentTail.className, tailFills[variant])}
          viewBox="0 0 16 16"
        >
          <path d={currentTail.path} />
        </svg>
      )}
    </button>
  );
};

export default Button;
