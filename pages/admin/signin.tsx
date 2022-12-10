import React from "react";
import SignInForm from "@app/components/auth/signin/SignInForm";
import { TopWaveLayout } from "@app/layouts";

const SignIn: React.FC = () => {
  return (
    <TopWaveLayout>
      <div className="p-1 flex flex-col w-full items-center justify-center">
        <SignInForm />
      </div>
    </TopWaveLayout>
  );
};

export default SignIn;
