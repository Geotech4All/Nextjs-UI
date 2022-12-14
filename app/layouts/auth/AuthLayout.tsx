import { PageWaterLoader } from "@app/components";
import { getRefreshCookies, setAuthCookies } from "@utils/cookies";
import { useRefreshToken } from "@utils/graphql/hooks/auth";
import { useRouter } from "next/router";
import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode | React.ReactElement;
}

const signin = "/admin/signin";

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const [authenticating, setAuthenticating] = React.useState(true);
  const router = useRouter();
  const [refresh, { loading }] = useRefreshToken();

  const refetchToken = (): void => {
    const refreshToken = getRefreshCookies();
    if (refreshToken === null || refreshToken === undefined) {
      void router.replace(signin);
    } else {
      void refresh({ variables: { refreshToken } })
        .then((resp) => {
          const response = resp.data?.refreshToken;
          if (response === null || response === undefined) {
            void router.replace(signin);
          } else {
            if (response.errors !== null) void router.replace(signin);
            setAuthenticating(false);
            setAuthCookies(response.token ?? "", response.refreshToken ?? "");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    refetchToken();
    const interval = setInterval(() => refetchToken(), 300000);
    return () => clearInterval(interval);
  }, []);

  const { children } = props;
  if (authenticating || loading) {
    return <PageWaterLoader />;
  }
  return <main className="flex min-w-[100vw] min-h-screen flex-col">{children}</main>;
};

export default AuthLayout;
