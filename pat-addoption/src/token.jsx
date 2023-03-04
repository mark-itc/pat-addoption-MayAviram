import Cookies from "js-cookie";

export function saveTokenInCookies(response) {
  Cookies.set(`token`, response.headers.authorization, { httpOnly: false });
}

export function clearTokenInCookies() {
  Cookies.remove("token");
}
