import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  // ici vous mettez les chemins ou route de votre projet. ex:"/users/:path*"
  matcher: [],
};
