import Cookies from "js-cookie";

const setCookies = Cookies.set;
const getCookies = Cookies.get;

const tokenName = "token";
const refreshName = "refresh";

/**
 * Sets user authentication cookies
 * @param {string} token - the authentication token of the user
 * @param {string} refresh - the refresh token of the user
 */
export const setAuthCookies = (token: string, refresh: string): void => {
  setCookies(tokenName, token, { samesite: "None" });
  setCookies(refreshName, refresh, { samesite: "None" });
};

/**
 * Gets and returns a user authentication token, return null if undefined
 */
export const getAuthCookies = (): string | null => {
  const token = getCookies(tokenName);
  return token != null ? token : null;
};

/**
 * Gets and returns a user refresh token, return null if undefined
 */
export const getRefreshCookies = (): string | null => {
  const token = getCookies(refreshName);
  return token != null ? token : null;
};
