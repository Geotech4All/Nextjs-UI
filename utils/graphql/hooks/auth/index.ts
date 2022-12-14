import { setAuthCookies } from "@utils/cookies";
import type {
  ObtainJsonWebToken,
  RefreshToken,
  MutationRefreshTokenArgs
} from "@utils/graphql/codegen/graphql";
import { useAppDispatch } from "@utils/store/hooks";
import { setAdminUser } from "@store/slices/adminUserSlice";
import { MutationTuple, useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "@utils/graphql/queries/Mutations";

type Dispatch = ReturnType<typeof useAppDispatch>;

/**
 * Carries out login and user save action after user has been authenticated.
 * @param {Dispatch} dispatch - a redux dispatch function used to save the user
 * @param {ObtainJsonWebToken} loginResponse - the response retured by authentication mutation
 */
export const loginAdmin = (dispatch: Dispatch, loginResponse: ObtainJsonWebToken): void => {
  setAuthCookies(loginResponse.token ?? "", loginResponse.refreshToken ?? "");
  if (loginResponse.user != null) {
    dispatch(setAdminUser(loginResponse.user));
  }
};

export const useRefreshToken = (): MutationTuple<
  { refreshToken: RefreshToken },
  MutationRefreshTokenArgs
> => {
  return useMutation<{ refreshToken: RefreshToken }, MutationRefreshTokenArgs>(REFRESH_TOKEN);
};
