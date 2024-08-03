// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { authOptions } from "@/lib/authOptions"; // Adjust the path as needed
// import { getServerSession } from "next-auth/next";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   try {
//     // Extract the session from the request
//     const token = await getToken({
//       req,
//     });

//     console.log("Session:", token); // Log session for debugging

//     // Redirect to login page if not authenticated and accessing protected routes
//     if (!token) {
//       console.log("Not logged in");
//       return NextResponse.redirect(new URL("/", req.url));
//     }

//     return NextResponse.next();
//   } catch (error) {
//     console.error("Error in middleware:", error); // Log the specific error
//     return NextResponse.next(); // Handle the error appropriately
//   }
// }

// // Middleware configuration
// export const config = {
//   matcher: ["/p/:path*"], // Adjust the pattern to match the protected routes
// };
