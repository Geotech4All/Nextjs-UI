import React from "react";
import { PageWaterLoader } from "@app/components";
import { motion } from "framer-motion";
import { getRefreshCookies, setAuthCookies } from "@utils/cookies";
import { useRefreshToken } from "@utils/graphql/hooks/auth";
import { useRouter } from "next/router";
import { useAppSelector } from "@utils/store/hooks";
import { selectAdminPage } from "@utils/store/slices/adminPageSlice";

interface AuthLayoutProps {
  children?: React.ReactNode | React.ReactElement;
}

const signin = "/admin/signin";

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const [authenticating, setAuthenticating] = React.useState(true);
  const router = useRouter();
  const [refresh, { loading }] = useRefreshToken();
  const adminPage = useAppSelector(selectAdminPage);

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
  return (
    <motion.main
      animate={{ marginLeft: adminPage.sideOpen ? 170 : 90 }}
      className="flex w-full min-h-screen flex-col"
    >
      {children}
    </motion.main>
  );
};

export default AuthLayout;
