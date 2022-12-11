import { setAuthCookies } from "@utils/cookies";
import { ObtainJsonWebToken } from "@utils/graphql/codegen/graphql";
import { useAppDispatch } from "@utils/store/hooks";
import { setAdminUser } from "@store/slices/adminUserSlice";

type Dispatch = ReturnType<typeof useAppDispatch>;
export const loginAdmin = (dispatch: Dispatch, loginResponse: ObtainJsonWebToken): void => {
  setAuthCookies(loginResponse.token ?? "", loginResponse.refreshToken ?? "");
  if (loginResponse.user != null) {
    dispatch(setAdminUser(loginResponse.user));
  }
};
