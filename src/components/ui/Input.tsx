import { InputProps } from "@/types";

const Input = ({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
        {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
      />
    </div>
  );
};

export default Input;
