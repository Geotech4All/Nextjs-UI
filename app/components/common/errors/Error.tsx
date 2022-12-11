import React from "react";
// import type { ErrorType } from "@gql/codegen/graphql";

interface ErrorType {
  message?: string;
  code?: string;
}
const Error: React.FC<ErrorType> = (props) => {
  const { message, code } = props;
  return (
    <li className="flex flex-col gap-0.5 md:flex-row md:gap-3 text-red-900">
      {code != null && <strong>{code}:</strong>}
      <span className="text-red-500">{message}</span>
    </li>
  );
};
export default Error;
