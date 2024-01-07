//Public routes that can be accessed without authentication
export const publicRoutes = [
    "/",
    "/auth/new-verification"
  ];

  //Private routes that can only be accessed by the authenticated
  export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
  ];

  //Routes that permit the user to be authenticated
  export const apiAuthPrefix = "/api/auth";

  //Default redirect after login
  export const DEFAULT_LOGIN_REDIRECT = "/settings";