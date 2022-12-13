import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode | React.ReactElement;
}
const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default AuthLayout;
