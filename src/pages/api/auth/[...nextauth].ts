import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  secret: process.env.SECRET!,
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async session({ session }) {
      return {
        ...session,
        user: {
          ...session.user,
        }
      };
    }
  }
}
export default NextAuth(authOptions);

