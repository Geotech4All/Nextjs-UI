import React from "react";

interface AuthFormProps {
  children?: React.ReactNode;
  message?: string;
  onSubmit?: React.FormEventHandler;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const { children, message, onSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col bg-ui-pink-20 w-full max-w-[50rem] gap-2 p-1.5 md:p-3 rounded-xl md:rounded-3xl"
      action=""
    >
      <legend className="bg-white p-4 flex item-center py-5 justify-center text-xl md:text-2xl font-bold text-black/50 rounded-xl">
        {message}
      </legend>
      {children}
    </form>
  );
};

export default AuthForm;
