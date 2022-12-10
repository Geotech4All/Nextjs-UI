import React from "react";
import { Input, AuthForm, SubmitButton } from "@components/index";

const SignInForm: React.FC = () => {
  return (
    <AuthForm message="Welcome Back 🥳">
      <Input placeholder="geotechling@gmail.com" label="Email" type="email" name="email" />
      <Input placeholder="**********" type="password" label="Password" name="password" />
      <SubmitButton>Login</SubmitButton>
    </AuthForm>
  );
};

export default SignInForm;
