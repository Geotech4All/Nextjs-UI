import React from "react";

interface AuthFormProps {
  children?: React.ReactNode;
  message?: string;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const { children, message } = props;
  return (
    <form
      className="flex flex-col bg-ui-pink-20 w-full max-w-[50rem] gap-2 p-3 rounded-3xl"
      action=""
    >
      <legend className="bg-white p-4 flex item-center py-9 justify-center text-2xl font-bold text-black/50 rounded-xl">
        {message}
      </legend>
      {children}
    </form>
  );
};

export default AuthForm;
