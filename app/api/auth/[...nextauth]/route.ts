import { authOptions } from "@/lib/authOptions";
import nextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

const handler = nextAuth(authOptions)

export {handler as GET,handler as POST}