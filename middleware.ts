import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
  // publicRoutes: ["/((?!.*\\..*|_next).*)", "/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
