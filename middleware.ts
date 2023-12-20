import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
   
  ],
  ignoredRoutes: [
    '/api/webhook/cleark',
    'api/webhook/stripe',
    'api/uploading'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 