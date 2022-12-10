import React from "react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      className="bg-ui-pink-60 hover:bg-ui-pink-50 active:bg-ui-pink-40 transition-all text-lg text-white font-bold p-2 rounded-3xl"
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
