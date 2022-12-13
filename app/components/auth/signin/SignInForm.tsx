import React from "react";
import { Input, AuthForm, SubmitButton, Password, ErrorList, PageWaterLoader } from "@app/components";
import type { NonFieldErrors } from "@app/components";
import { adminLogin } from "pages/api/auth";
import { loginAdmin } from "@utils/graphql/hooks/auth";
import { useAppDispatch } from "@utils/store/hooks";
import { useRouter } from "next/router";
import { ErrorType } from "@utils/graphql/codegen/graphql";

const SignInForm: React.FC = () => {
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<NonFieldErrors | ErrorType[]>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitHandler: React.FormEventHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    if (emailRef.current.value !== "" && passwordRef.current.value !== "") {
      void adminLogin({ email: emailRef.current.value, password: passwordRef.current.value }).then(
        (resp) => {
          if (resp.success === true) {
            loginAdmin(dispatch, resp);
            void router.replace("/admin/dashboard");
          } else {
            setLoading(false);
            setErrors(resp.errors);
          }
        }
      );
    }
  };

  return (
    <>
      {loading && <PageWaterLoader />}
      <AuthForm onSubmit={submitHandler} message="Welcome Back 🥳">
        {errors != null && <ErrorList errors={errors} />}
        <Input
          ref={emailRef}
          placeholder="geotechling@gmail.com"
          label="Email"
          type="email"
          name="email"
        />
        <Password ref={passwordRef} placeholder="**********" label="Password" name="password" />
        <SubmitButton>Login</SubmitButton>
      </AuthForm>
    </>
  );
};

export default SignInForm;
