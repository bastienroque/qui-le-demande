import { H1Props, H2Props, PProps } from "@/types";

export const H1 = ({ children, className }: H1Props) => (
  <h1 className={`text-4xl md:text-5xl font-extrabold ${className || ""}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: H2Props) => (
  <h2 className={`text-3xl font-bold ${className || ""}`}>{children}</h2>
);

export const P = ({ children, className }: PProps) => (
  <p className={`leading-relaxed ${className || ""}`}>{children}</p>
);
