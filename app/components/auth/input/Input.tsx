import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  name?: string;
  // taype?: React.HTMLInputTypeAttribute
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    const { label, name, ...rest } = props;
    return (
      <div className="flex flex-row-reverse rounded-3xl focus-within:shadow-xl transition-all p-1 gap-3 w-full">
        <input
          name={name}
          id={name}
          className="bg-transparent peer w-full placeholder:italic outline-none"
          ref={ref}
          {...rest}
        />
        <label
          htmlFor={name}
          className="bg-ui-pink-50 p-2 peer-focus:pr-3 peer-focus:bg-ui-pink-70 px-3 pr-9 transition-all rounded-3xl text-white font-bold"
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
