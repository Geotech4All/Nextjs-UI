/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { motion } from "framer-motion";
import type { ErrorType } from "@utils/graphql/codegen/graphql";
import Error from "@components/common/errors/Error";

interface ComponentType {
  children?: React.ReactNode;
}

export interface NonFieldError {
  message: string;
  code: string;
}

export interface NonFieldErrors {
  nonFieldErrors?: NonFieldError[];
}

export interface ErrorListType {
  errors: NonFieldErrors | ErrorType[];
}

function isNonFieldError(errors: NonFieldErrors | ErrorType[]): errors is NonFieldErrors {
  const testErrors = errors as NonFieldErrors;
  return testErrors.nonFieldErrors !== undefined;
}

const ErrorContainer: React.FC<ComponentType> = (props) => {
  return (
    <motion.ul
      initial={{ scale: 0.3 }}
      animate={{ scale: [1, 1.4, 1.4, 1, 1], transition: { duration: 0.8 } }}
      className="bg-red-500/20 flex flex-col gap-3 p-2.5 md:p-3 border border-red-500/60 rounded-lg"
    >
      {props.children}
    </motion.ul>
  );
};

const ErrorList: React.FC<ErrorListType> = (props) => {
  const { errors } = props;
  if (isNonFieldError(errors)) {
    return (
      <ErrorContainer>
        {errors.nonFieldErrors?.map((error) => {
          return <Error key={Math.random()} code={error.code} message={error.message} />;
        })}
      </ErrorContainer>
    );
  } else {
    return (
      <ErrorContainer>
        {errors.map((error) => (
          <Error key={Math.random()} message={error.messages[0]} code={error.field} />
        ))}
      </ErrorContainer>
    );
  }
};

export default ErrorList;
