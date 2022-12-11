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
  setCookies(tokenName, token);
  setCookies(refreshName, refresh);
};

/**
 * Gets and returns a user authentication cookies, return null if undefined
 */
export const getAuthCookies = (): string | null => {
  const token = getCookies(tokenName);
  return token != null ? token : null;
};
