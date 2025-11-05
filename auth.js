import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./lib/mongodb/mongo";
import { mongooseConnect } from "./lib/mongodb/mongoose";
import { User } from "./database/models/User";
import { compare } from "bcryptjs";

const nextAuthSetup = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      async authorize({ email, password }) {
        if (!email || !password) {
          return null;
        }
        const user = await User.findOne({ email, password });
        if (!user) {
          throw new Error("No user found");
        }
        const isPasswordValid = await compare(
          password.toString(),
          user.password
        );
        if (!isPasswordValid) return null;

        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //Store only essential data in the token
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;

        //Don't include large objects or arrays that could bloat the token
      }
      return token;
    },
    async session({ session, token }) {
      //Transfer necessary data from token to session
      session.user.id = token.id;
      session.user.role = token.role;
      //Fetch additional data from API if needed

      return session;
    },
  },
});
export const { handlers, signIn, signOut, auth } = nextAuthSetup;
