// Funkcia, ktorá zabezpečí správne fungovanie pri expirácii tokenu,
// (napr. použije refresh token pre request nového tokenu)

import { RefreshTokenFetch } from "../services/api.jsx";

const handleExpiredToken = async (navigate) => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    localStorage.clear();
    if (typeof navigate === "function") {
      return navigate("/login");
    }
    return false;
  }

  const res = await RefreshTokenFetch(refreshToken);

  if (!res) {
    localStorage.clear();
    if (typeof navigate === "function") {
      return navigate("/login");
    }
    return false;
  }

  return true;
};

export default handleExpiredToken;
