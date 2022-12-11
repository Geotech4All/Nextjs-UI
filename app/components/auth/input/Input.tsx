import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  name?: string;
  // taype?: React.HTMLInputTypeAttribute
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-row-reverse rounded-3xl focus-within:shadow-xl transition-all p-1 gap-3 w-full">
      <input
        name={name}
        id={name}
        className="bg-transparent peer w-full placeholder:italic text-black/75 p-1 px-3 rounded-3xl outline-none"
        ref={ref}
        {...rest}
      />
      <label
        htmlFor={name}
        className="bg-ui-pink-50 p-2 peer-focus:pr-3 w-56 peer-focus:w-auto peer-focus:bg-ui-pink-70 px-3 pr-9 transition-all rounded-3xl text-white font-bold"
      >
        {label}
      </label>
    </div>
  );
});

Input.displayName = "Input";
export default Input;

export const Password = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    const [passwordVissivle, setPasswordVissible] = React.useState(false);
    const { label, name, ...rest } = props;

    const visibilityHandler = (): void => {
      if (passwordVissivle) {
        setPasswordVissible(false);
      } else {
        setPasswordVissible(true);
      }
    };
    return (
      <div className="flex flex-row-reverse rounded-3xl focus-within:shadow-xl transition-all p-1 gap-3 w-full">
        <button type="button" className="text-black/50" onClick={visibilityHandler}>
          {passwordVissivle ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
        <input
          name={name}
          id={name}
          className="bg-transparent peer w-full placeholder:italic text-black/75 p-1 px-3 rounded-3xl outline-none"
          ref={ref}
          type={passwordVissivle ? "text" : "password"}
          {...rest}
        />
        <label
          htmlFor={name}
          className="bg-ui-pink-50 p-2 peer-focus:pr-3 w-56 peer-focus:w-auto peer-focus:bg-ui-pink-70 px-3 pr-9 transition-all rounded-3xl text-white font-bold"
        >
          {label}
        </label>
      </div>
    );
  }
);

Password.displayName = "Password";
