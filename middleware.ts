import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix, } from "./routes";
const {auth} = NextAuth(authConfig);
export default auth((req) => {
// console.log("ROUTE: ",req.nextUrl.pathname)
// console.log("IS LOGGED IN: ",isLoggedIn)
const {nextUrl}= req
const isLoggedIn =!!req.auth
const isApiAuthRoute= nextUrl.pathname.startsWith(apiAuthPrefix)
})
// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }